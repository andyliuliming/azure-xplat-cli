// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"aa28d768-3524-46b0-9a25-9399fe32c960\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"aa28d768-3524-46b0-9a25-9399fe32c960\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aa28d768-3524-46b0-9a25-9399fe32c960"',
  'x-ms-request-id': 'b65d79a2-032e-4986-9405-5bc7dcb4a0a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6abb3c4c-417c-430d-b009-0647af32e468',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093744Z:6abb3c4c-417c-430d-b009-0647af32e468',
  date: 'Tue, 26 Jan 2016 09:37:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"aa28d768-3524-46b0-9a25-9399fe32c960\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"aa28d768-3524-46b0-9a25-9399fe32c960\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aa28d768-3524-46b0-9a25-9399fe32c960"',
  'x-ms-request-id': 'b65d79a2-032e-4986-9405-5bc7dcb4a0a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6abb3c4c-417c-430d-b009-0647af32e468',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093744Z:6abb3c4c-417c-430d-b009-0647af32e468',
  date: 'Tue, 26 Jan 2016 09:37:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbnic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic\",\r\n  \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"110c20c6-aacf-4c8d-a478-4363e959f9d6\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LBAddPollnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddPollnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\",\r\n          \"backendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddInboundnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4871',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"494e0696-717b-4a4b-8f9b-80959829a7f4"',
  'x-ms-request-id': '3f711450-8065-439e-9dd0-f124c0850cab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c5a981bb-bdf8-4675-9bbf-439bb527016a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093745Z:c5a981bb-bdf8-4675-9bbf-439bb527016a',
  date: 'Tue, 26 Jan 2016 09:37:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbnic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic\",\r\n  \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"110c20c6-aacf-4c8d-a478-4363e959f9d6\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LBAddPollnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddPollnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\",\r\n          \"backendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddInboundnic\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\",\r\n        \"etag\": \"W/\\\"494e0696-717b-4a4b-8f9b-80959829a7f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4871',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"494e0696-717b-4a4b-8f9b-80959829a7f4"',
  'x-ms-request-id': '3f711450-8065-439e-9dd0-f124c0850cab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c5a981bb-bdf8-4675-9bbf-439bb527016a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093745Z:c5a981bb-bdf8-4675-9bbf-439bb527016a',
  date: 'Tue, 26 Jan 2016 09:37:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"8f831f7a-d314-41e7-b57f-a310e915f476\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"8f831f7a-d314-41e7-b57f-a310e915f476\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce121e9d-a3a3-40b6-badd-086114842793',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/ce121e9d-a3a3-40b6-badd-086114842793?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '95a8822f-fe21-4ab9-8e10-ea3fd3fa40ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093746Z:95a8822f-fe21-4ab9-8e10-ea3fd3fa40ca',
  date: 'Tue, 26 Jan 2016 09:37:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"8f831f7a-d314-41e7-b57f-a310e915f476\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"8f831f7a-d314-41e7-b57f-a310e915f476\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce121e9d-a3a3-40b6-badd-086114842793',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/ce121e9d-a3a3-40b6-badd-086114842793?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '95a8822f-fe21-4ab9-8e10-ea3fd3fa40ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093746Z:95a8822f-fe21-4ab9-8e10-ea3fd3fa40ca',
  date: 'Tue, 26 Jan 2016 09:37:46 GMT',
  connection: 'close' });
 return result; }]];