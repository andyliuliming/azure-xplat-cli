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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-circuit\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n      \"etag\": \"W/\\\"78470c25-1f39-476f-a2d2-31737b45c075\\\"\",\r\n      \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"330adaa8-bf09-4992-887a-aa25ff616ee7\",\r\n        \"peerings\": [],\r\n        \"authorizations\": [],\r\n        \"serviceProviderProperties\": {\r\n          \"serviceProviderName\": \"InterCloud\",\r\n          \"peeringLocation\": \"London\",\r\n          \"bandwidthInMbps\": 500\r\n        },\r\n        \"circuitProvisioningState\": \"Enabled\",\r\n        \"serviceKey\": \"0229cf63-24ad-4cb7-b178-fc29b4f47833\",\r\n        \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Premium_UnlimitedData\",\r\n        \"tier\": \"Premium\",\r\n        \"family\": \"UnlimitedData\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1165',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '322002de-c463-4849-bf50-f9731487f46b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '951b5168-3479-436f-b317-a8508febf920',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144205Z:951b5168-3479-436f-b317-a8508febf920',
  date: 'Fri, 25 Mar 2016 14:42:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-circuit\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n      \"etag\": \"W/\\\"78470c25-1f39-476f-a2d2-31737b45c075\\\"\",\r\n      \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"330adaa8-bf09-4992-887a-aa25ff616ee7\",\r\n        \"peerings\": [],\r\n        \"authorizations\": [],\r\n        \"serviceProviderProperties\": {\r\n          \"serviceProviderName\": \"InterCloud\",\r\n          \"peeringLocation\": \"London\",\r\n          \"bandwidthInMbps\": 500\r\n        },\r\n        \"circuitProvisioningState\": \"Enabled\",\r\n        \"serviceKey\": \"0229cf63-24ad-4cb7-b178-fc29b4f47833\",\r\n        \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Premium_UnlimitedData\",\r\n        \"tier\": \"Premium\",\r\n        \"family\": \"UnlimitedData\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1165',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '322002de-c463-4849-bf50-f9731487f46b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '951b5168-3479-436f-b317-a8508febf920',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144205Z:951b5168-3479-436f-b317-a8508febf920',
  date: 'Fri, 25 Mar 2016 14:42:05 GMT',
  connection: 'close' });
 return result; }]];