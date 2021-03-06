// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2015-12-01.2.2&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 22 Mar 2016 23:37:11 GMT',
  etag: '0x8D352AAE4062534',
  location: 'https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e64a421-56cb-4b59-921d-0a496ee54d73',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '47ef0210-8d29-41a4-8fe1-f59257258350',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool',
  date: 'Tue, 22 Mar 2016 23:37:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2015-12-01.2.2&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 22 Mar 2016 23:37:11 GMT',
  etag: '0x8D352AAE4062534',
  location: 'https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e64a421-56cb-4b59-921d-0a496ee54d73',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '47ef0210-8d29-41a4-8fe1-f59257258350',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool',
  date: 'Tue, 22 Mar 2016 23:37:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D352AAE4062534\",\"lastModified\":\"2016-03-22T23:37:11.2897844Z\",\"creationTime\":\"2016-03-22T23:37:11.2897844Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-22T23:37:11.2897844Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-22T23:37:11.3947741Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 22 Mar 2016 23:37:11 GMT',
  etag: '0x8D352AAE4062534',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a4961cd-839b-4177-b6ac-427c641245d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a0db3671-f780-4191-b351-7351ab467699',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D352AAE4062534\",\"lastModified\":\"2016-03-22T23:37:11.2897844Z\",\"creationTime\":\"2016-03-22T23:37:11.2897844Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-22T23:37:11.2897844Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-22T23:37:11.3947741Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 22 Mar 2016 23:37:11 GMT',
  etag: '0x8D352AAE4062534',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a4961cd-839b-4177-b6ac-427c641245d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a0db3671-f780-4191-b351-7351ab467699',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:11 GMT',
  connection: 'close' });
 return result; }]];