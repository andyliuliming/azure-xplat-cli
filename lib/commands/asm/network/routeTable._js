/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var Subnet = require('./subnet');
var $ = utils.getLocaleString;

function RouteTable(cli, networkManagementClient) {
  this.cli = cli;
  this.networkManagementClient = networkManagementClient;
}

__.extend(RouteTable.prototype, {
  create: function(routeTableName, location, options, _) {
    options.name = routeTableName;
    options.location = location;

    var progress = this.cli.interaction.progress(util.format($('Creating route table "%s"'), routeTableName));
    try {
      this.networkManagementClient.routes.createRouteTable(options, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
  },

  get: function(routeTableName, _) {
    var progress = this.cli.interaction.progress(util.format($('Looking up route table "%s"'), routeTableName));
    var routeTable;
    try {
      routeTable = this.networkManagementClient.routes.getRouteTable(routeTableName, _);
    } catch (e) {
      if (e.code === 'ResourceNotFound' || e.code === 'NotFound') {
        routeTable = null;
      } else {
        throw e;
      }
    } finally {
      progress.end();
    }

    return routeTable;
  },

  show: function(routeTableName, options, _) {
    var routeTable = this.get(routeTableName, _);
    var output = this.cli.output;
    var interaction = this.cli.interaction;

    if (routeTable) {
      interaction.formatOutput(routeTable.routeTable, function (routeTable) {
        output.nameValue($('Name'), routeTable.name);
        output.nameValue($('Location'), routeTable.location);
        if (routeTable.routeList.length > 0) {
          output.header($('Route list'));
          routeTable.routeList.forEach(function(route) {
            output.nameValue($('Name'), route.name);
            output.nameValue($('Address prefix'), route.addressPrefix, 2);
            output.nameValue($('Next hop type'), route.nextHop.type, 2);
          });
        }
      });
    } else {
      if (output.format().json) {
        output.json({});
      } else {
        output.warn(util.format($('A route table with name "%s" not found'), routeTableName));
      }
    }
  },

  list: function(options, _) {
    var progress = this.cli.interaction.progress(('Looking up route tables'));
    var routeTables;
    try {
      routeTables = this.networkManagementClient.routes.listRouteTables(_);
    } finally {
      progress.end();
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(routeTables.routeTables, function (outputData) {
      if (outputData.length === 0) {
        output.warn($('No route tables found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
          row.cell($('Routes count'), item.routeList.length);
        });
      }
    });
  },

  delete: function(routeTableName, options, _) {
    var progress = this.cli.interaction.progress(util.format($('Deleting route table "%s"'), routeTableName));
    try {
      this.networkManagementClient.routes.deleteRouteTable(routeTableName, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
  },

  addRouteTableToSubnet: function (vnetName, subnetName, routeTableName, options, _) {
    var subnetCRUD = new Subnet(this.cli, this.networkManagementClient);
    var subnet = subnetCRUD.get(vnetName, subnetName, options, _);
    var output = this.cli.output;
    if (!subnet) {
      output.warn(util.format($('Virtual network subnet with name "%s" not found in virtual network "%s"'), subnetName, vnetName));
      return;
    }

    var routeTable = this.getRouteTableForSubnet(vnetName, subnetName, _);
    if (routeTable && utils.ignoreCaseEquals(routeTable.routeTableName, routeTableName)) {
      output.warn(util.format($('Route table with name "%s" is already associated with subnet "%s"'), routeTableName, subnetName));
      return;
    }

    var parameters = {
      routeTableName: routeTableName
    };

    var progress = this.cli.interaction.progress(util.format($('Associating route table "%s" and subnet "%s"'), routeTableName, subnetName));
    try {
      this.networkManagementClient.routes.addRouteTableToSubnet(vnetName, subnetName, parameters, _);
    } finally {
      progress.end();
    }
    options.detailed = true;
    this.showRouteTableForSubnet(vnetName, subnetName, options, _);
  },

  deleteRouteTableFromSubnet: function (vnetName, subnetName, routeTableName, options, _) {
    var subnetCRUD = new Subnet(this.cli, this.networkManagementClient);
    var subnet = subnetCRUD.get(vnetName, subnetName, options, _);
    var output = this.cli.output;
    if (!subnet) {
      output.warn(util.format($('Virtual network subnet with name "%s" not found in virtual network "%s"'), subnetName, vnetName));
      return;
    }

    var routeTable = this.networkManagementClient.routes.getRouteTableForSubnet(vnetName, subnetName, _);
    if (!utils.ignoreCaseEquals(routeTable.routeTableName, routeTableName)) {
      output.warn(util.format($('Route table "%s" not found in virtual network "%s"'), routeTableName, vnetName));
      return;
    }

    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete the route table "%s" association with subnet "%s"? [y/n] '),
        routeTableName, subnetName), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Removing route table "%s" and subnet "%s" association'),
      routeTableName, subnetName));
    try {
      this.networkManagementClient.routes.removeRouteTableFromSubnet(vnetName, subnetName, _);
    } finally {
      progress.end();
    }
  },

  showRouteTableForSubnet: function (vnetName, subnetName, options, _) {
    var defaultDetailLevel = 5;
    var output = this.cli.output;
    var routeTable = this.getRouteTableForSubnet(vnetName, subnetName, _);
    if (!routeTable) {
      output.warn(util.format($('No route table was found in virtual network "%s" subnet "%s"'), vnetName, subnetName));
      return;
    }

    var indent = 0;
    output.nameValue('Route table name', routeTable.routeTableName);

    if (options.detailed) {
      indent += 2;
      var gatewayDetails = this.networkManagementClient.routes.getRouteTableWithDetails(routeTable.routeTableName, defaultDetailLevel, _);
      gatewayDetails = gatewayDetails.routeTable;
      output.nameValue('Location', gatewayDetails.location, indent);
      output.nameValue('State', gatewayDetails.state, indent);
      output.nameValue('Label', gatewayDetails.label, indent);
      output.list('Routes', gatewayDetails.routeList, indent);
    }
  },

  getRouteTableForSubnet: function (vnetName, subnetName, _) {
    var progress = this.cli.interaction.progress(util.format($('Looking up network gateway route tables in virtual network "%s" subnet "%s"'), vnetName, subnetName));
    var routeTable;
    try {
      routeTable = this.networkManagementClient.routes.getRouteTableForSubnet(vnetName, subnetName, _);
    } catch (e) {
      if (e.code === 'ResourceNotFound' || e.code === 'NotFound') {
        return null;
      } else {
        throw e;
      }
    } finally {
      progress.end();
    }
    return routeTable;
  }
});

module.exports = RouteTable;