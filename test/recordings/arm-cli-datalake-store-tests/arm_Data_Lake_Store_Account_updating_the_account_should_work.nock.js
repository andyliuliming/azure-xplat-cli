// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:17:25.9736492Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '700d9aee-4332-4b20-9d9e-30ec0f13db7d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'decd3132-477f-48ff-817e-c4176253c33b',
  'x-ms-routing-request-id': 'WESTUS:20160316T221802Z:decd3132-477f-48ff-817e-c4176253c33b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:17:25.9736492Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '700d9aee-4332-4b20-9d9e-30ec0f13db7d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'decd3132-477f-48ff-817e-c4176253c33b',
  'x-ms-routing-request-id': 'WESTUS:20160316T221802Z:decd3132-477f-48ff-817e-c4176253c33b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:17:25.9736492Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1ae1f991-0376-4e8f-b8cc-5804dc3c3359',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '414ae149-5c23-4669-aedc-e1cd3a072def',
  'x-ms-routing-request-id': 'WESTUS:20160316T221803Z:414ae149-5c23-4669-aedc-e1cd3a072def',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:17:25.9736492Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1ae1f991-0376-4e8f-b8cc-5804dc3c3359',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '414ae149-5c23-4669-aedc-e1cd3a072def',
  'x-ms-routing-request-id': 'WESTUS:20160316T221803Z:414ae149-5c23-4669-aedc-e1cd3a072def',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '89193817-b295-4bf2-9a79-c70237224ce7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '2d4bc92d-c95c-46f0-a9ec-f237ce33cf6b',
  'x-ms-routing-request-id': 'WESTUS:20160316T221805Z:2d4bc92d-c95c-46f0-a9ec-f237ce33cf6b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '89193817-b295-4bf2-9a79-c70237224ce7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '2d4bc92d-c95c-46f0-a9ec-f237ce33cf6b',
  'x-ms-routing-request-id': 'WESTUS:20160316T221805Z:2d4bc92d-c95c-46f0-a9ec-f237ce33cf6b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8a71c069-c554-41b8-a5f6-745d5459f519',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '848789e5-9297-4b0a-a852-123d9e858c93',
  'x-ms-routing-request-id': 'WESTUS:20160316T221806Z:848789e5-9297-4b0a-a852-123d9e858c93',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8a71c069-c554-41b8-a5f6-745d5459f519',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '848789e5-9297-4b0a-a852-123d9e858c93',
  'x-ms-routing-request-id': 'WESTUS:20160316T221806Z:848789e5-9297-4b0a-a852-123d9e858c93',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; }]];