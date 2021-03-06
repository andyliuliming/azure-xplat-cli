// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/routetables')
  .reply(200, "<RouteTables xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RouteTable><Name>CliTestRouTab</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1243</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1364</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1595</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1641</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab2670</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab2752</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab5728</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab6667</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab6694</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab9644</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>routetable1</Name><Location>West US</Location></RouteTable><RouteTable><Name>TestRoute</Name><Location>West US</Location></RouteTable><RouteTable><Name>TestRoute2</Name><Label>Testing RoutTable</Label><Location>West US</Location></RouteTable></RouteTables>", { 'cache-control': 'no-cache',
  'content-length': '1518',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b1ef573fc2e6b0558474ec6f4c0d3e55',
  date: 'Wed, 17 Jun 2015 06:48:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/routetables')
  .reply(200, "<RouteTables xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RouteTable><Name>CliTestRouTab</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1243</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1364</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1595</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab1641</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab2670</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab2752</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab5728</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab6667</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab6694</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>CliTestRouTab9644</Name><Label>Route</Label><Location>West US</Location></RouteTable><RouteTable><Name>routetable1</Name><Location>West US</Location></RouteTable><RouteTable><Name>TestRoute</Name><Location>West US</Location></RouteTable><RouteTable><Name>TestRoute2</Name><Label>Testing RoutTable</Label><Location>West US</Location></RouteTable></RouteTables>", { 'cache-control': 'no-cache',
  'content-length': '1518',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b1ef573fc2e6b0558474ec6f4c0d3e55',
  date: 'Wed, 17 Jun 2015 06:48:48 GMT',
  connection: 'close' });
 return result; }]];