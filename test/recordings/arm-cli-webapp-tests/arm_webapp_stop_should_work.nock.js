// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e1b1b954-c500-427b-8cb1-ff8d47c39c17',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '82dc2e83-ff62-4cea-bc70-15c9386f0d72',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e1b1b954-c500-427b-8cb1-ff8d47c39c17/resourceGroups/testrg13424/providers/Microsoft.Web/sites/webappclitest3619/stop?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dddb7856-299a-4c06-a3db-6d674d1df64e',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'bbb82a51-6dcb-4549-b11a-6d94fbe00e0b',
  'x-ms-routing-request-id': 'WESTUS:20150620T015801Z:bbb82a51-6dcb-4549-b11a-6d94fbe00e0b',
  date: 'Sat, 20 Jun 2015 01:58:00 GMT' });
 return result; }]];