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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"d38220b9-69d8-4e95-9f21-5376092a9b11\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bb9b64cf-fe37-49ce-a7f8-2717437398e6\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.1.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d38220b9-69d8-4e95-9f21-5376092a9b11"',
  'x-ms-request-id': 'f79486e4-99c1-4f5f-a73f-e234f70161b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e86c542c-386c-4347-9045-bc58725e0492',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095639Z:e86c542c-386c-4347-9045-bc58725e0492',
  date: 'Mon, 15 Feb 2016 09:56:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"d38220b9-69d8-4e95-9f21-5376092a9b11\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bb9b64cf-fe37-49ce-a7f8-2717437398e6\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.1.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d38220b9-69d8-4e95-9f21-5376092a9b11"',
  'x-ms-request-id': 'f79486e4-99c1-4f5f-a73f-e234f70161b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e86c542c-386c-4347-9045-bc58725e0492',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095639Z:e86c542c-386c-4347-9045-bc58725e0492',
  date: 'Mon, 15 Feb 2016 09:56:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'e3b78c58-9f5e-4e32-a111-6201f593fa9f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'c7e56545-ab78-4bed-9278-b36382b6a79f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095640Z:c7e56545-ab78-4bed-9278-b36382b6a79f',
  date: 'Mon, 15 Feb 2016 09:56:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'e3b78c58-9f5e-4e32-a111-6201f593fa9f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'c7e56545-ab78-4bed-9278-b36382b6a79f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095640Z:c7e56545-ab78-4bed-9278-b36382b6a79f',
  date: 'Mon, 15 Feb 2016 09:56:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e59f7121-e52c-4b97-aaa1-d5cc99a2447e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1e1051cd-dd1a-458d-b42b-d344c5f587bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095711Z:1e1051cd-dd1a-458d-b42b-d344c5f587bb',
  date: 'Mon, 15 Feb 2016 09:57:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e3b78c58-9f5e-4e32-a111-6201f593fa9f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e59f7121-e52c-4b97-aaa1-d5cc99a2447e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1e1051cd-dd1a-458d-b42b-d344c5f587bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095711Z:1e1051cd-dd1a-458d-b42b-d344c5f587bb',
  date: 'Mon, 15 Feb 2016 09:57:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/test-local-gateway' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'x-ms-correlation-request-id': '0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095711Z:0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 09:57:11 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/test-local-gateway' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'x-ms-correlation-request-id': '0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T095711Z:0f743ab2-e2a3-4552-bf6e-8319a44a5349',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 09:57:11 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; }]];