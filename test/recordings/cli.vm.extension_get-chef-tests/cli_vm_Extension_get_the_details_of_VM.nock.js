// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website', 'website'],
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
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0d5c806522188808b38162c7aeec7b1d',
  date: 'Mon, 16 Mar 2015 01:37:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825</Url><ServiceName>clitestvm9825</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Status>Created</Status><DateCreated>2015-03-16T00:46:22Z</DateCreated><DateLastModified>2015-03-16T00:46:55Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm9825</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125</Url><ServiceName>testwinvm125</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHdpbnZtMTI1</Label><Status>Created</Status><DateCreated>2015-03-15T03:33:58Z</DateCreated><DateLastModified>2015-03-16T01:33:02Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testwinvm125</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '3420',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ed669cb708c28a889ed5a4394af0a7e0',
  date: 'Mon, 16 Mar 2015 01:37:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f187919ece4e8397a9e67dba42b6a395',
  date: 'Mon, 16 Mar 2015 01:37:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'baa1786f048a809fadefb204b73e06c5',
  date: 'Mon, 16 Mar 2015 01:37:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm9825</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>97d97e0f9ce94e80956b30b5a5e395cf</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Url>http://clitestvm9825.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm05ODI1Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm9825</RoleName><InstanceName>clitestvm9825</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.76.88.76</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-16T01:37:29Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>VM Agent is unresponsive. Status was last reported at 2015-03-16T00:46:47Z.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm9825</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm9825-clitestvm9825-0-201503160046430691</DiskName><MediaLink>https://azsmnet4404.blob.core.windows.net/vhd-store/clitestvm9825-894abdbde5b93052.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-16T00:46:29Z</CreatedTime><LastModifiedTime>2015-03-16T01:37:28Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2014-12-02T01:25:07Z</StartTime><EndTime>2014-12-04T01:25:07Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.193.68</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm9825.d9.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3017',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '32a6ee7a9539844f91b0376d18fb3186',
  date: 'Mon, 16 Mar 2015 01:37:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>testwinvm125</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>c2dd7acbf07d4d1b895306f47570c7b7</PrivateID><Status>Running</Status><Label>dGVzdHdpbnZtMTI1</Label><Url>http://testwinvm125.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ0ZXN0d2ludm0xMjUiPg0KICAgIDxJbnN0YW5jZXMgY291bnQ9IjEiIC8+DQogIDwvUm9sZT4NCjwvU2VydmljZUNvbmZpZ3VyYXRpb24+</Configuration><RoleInstanceList><RoleInstance><RoleName>testwinvm125</RoleName><InstanceName>testwinvm125</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Medium</InstanceSize><InstanceStateDetails/><IpAddress>100.112.100.119</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>PowerShell</Name><Vip>104.210.41.12</Vip><PublicPort>5986</PublicPort><LocalPort>5986</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint><InstanceEndpoint><Name>Remote Desktop</Name><Vip>104.210.41.12</Vip><PublicPort>55820</PublicPort><LocalPort>3389</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><HostName>testwinvm125</HostName><RemoteAccessCertificateThumbprint>6C41918C8EC2C62EA51E9DD8F7B277BD7EFD0497</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-16T01:35:23Z</Timestamp><GuestAgentVersion>2.5.1198.702</GuestAgentVersion><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>GuestAgent is running and accepting new configurations.</Message></FormattedMessage></GuestAgentStatus><ResourceExtensionStatusList><ResourceExtensionStatus><HandlerName>Chef.Bootstrap.WindowsAzure.ChefClient</HandlerName><Version>11.16.4.2</Version><Status>Installing</Status><FormattedMessage><Language>en-US</Language><Message>Installing plugin (name: Chef.Bootstrap.WindowsAzure.ChefClient, version: 11.16.4.2)</Message></FormattedMessage></ResourceExtensionStatus><ResourceExtensionStatus><HandlerName>Microsoft.Compute.BGInfo</HandlerName><Version>1.1</Version><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>Plugin enabled (name: Microsoft.Compute.BGInfo, version: 1.1).</Message></FormattedMessage></ResourceExtensionStatus></ResourceExtensionStatusList></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>testwinvm125</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>5986</LocalPort><Name>PowerShell</Name><Port>5986</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>3389</LocalPort><Name>Remote Desktop</Name><Port>55820</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><ResourceExtensionReferences><ResourceExtensionReference><ReferenceName>BGInfo</ReferenceName><Publisher>Microsoft.Compute</Publisher><Name>BGInfo</Name><Version>1.*</Version><ResourceExtensionParameterValues/><State>Enable</State></ResourceExtensionReference><ResourceExtensionReference><ReferenceName>ChefClient</ReferenceName><Publisher>Chef.Bootstrap.WindowsAzure</Publisher><Name>ChefClient</Name><Version>11.*</Version><ResourceExtensionParameterValues><ResourceExtensionParameterValue><Key>ChefClientPublicConfigParameter</Key><Value>eyJjbGllbnRfcmIiOiJsb2dfbGV2ZWwgICAgICAgIDppbmZvXHJcbmxvZ19sb2NhdGlvbiAgICAgXCJjOi9jaGVmL2xvZ3NcIlxyXG5jaGVmX3NlcnZlcl91cmwgIFwiaHR0cHM6Ly9hcGkub3BzY29kZS5jb20vb3JnYW5pemF0aW9ucy9vcmduYW1lXCJcclxudmFsaWRhdGlvbl9jbGllbnRfbmFtZSBcdFwib3JnbmFtZS12YWxpZGF0b3JcIiIsImF1dG9VcGRhdGVDbGllbnQiOiJmYWxzZSJ9</Value><Type>Public</Type></ResourceExtensionParameterValue></ResourceExtensionParameterValues><State>Enable</State></ResourceExtensionReference></ResourceExtensionReferences><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>testwinvm125-testwinvm125-0-201503150334060989</DiskName><MediaLink>https://portalvhds38v5hbggr1fmp.blob.core.windows.net/vhds/testwinvm125-testwinvm125-2015-03-15.vhd</MediaLink><SourceImageName>a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201502.01-en.us-127GB.vhd</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Medium</RoleSize><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-15T03:34:03Z</CreatedTime><LastModifiedTime>2015-03-16T01:35:35Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>104.210.41.12</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>testwinvm125ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>testwinvm125.d6.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '5621',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3ef1bc11f31683e5a6be1cabe8c3442b',
  date: 'Mon, 16 Mar 2015 01:37:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c718b297c02383cdae6bf9cad42191e0',
  date: 'Mon, 16 Mar 2015 01:37:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825</Url><ServiceName>clitestvm9825</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Status>Created</Status><DateCreated>2015-03-16T00:46:22Z</DateCreated><DateLastModified>2015-03-16T00:46:55Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm9825</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125</Url><ServiceName>testwinvm125</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHdpbnZtMTI1</Label><Status>Created</Status><DateCreated>2015-03-15T03:33:58Z</DateCreated><DateLastModified>2015-03-16T01:33:02Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testwinvm125</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '3420',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e7c82ef9ba91899989370b4b3fbedb53',
  date: 'Mon, 16 Mar 2015 01:37:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd040394360d3898cbbdf427139553b1a',
  date: 'Mon, 16 Mar 2015 01:37:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7d816eefc1f3849983a9b1860c7708a6',
  date: 'Mon, 16 Mar 2015 01:37:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm9825</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>97d97e0f9ce94e80956b30b5a5e395cf</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Url>http://clitestvm9825.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm05ODI1Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm9825</RoleName><InstanceName>clitestvm9825</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.76.88.76</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-16T01:37:29Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>VM Agent is unresponsive. Status was last reported at 2015-03-16T00:46:47Z.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm9825</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm9825-clitestvm9825-0-201503160046430691</DiskName><MediaLink>https://azsmnet4404.blob.core.windows.net/vhd-store/clitestvm9825-894abdbde5b93052.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-16T00:46:29Z</CreatedTime><LastModifiedTime>2015-03-16T01:37:28Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2014-12-02T01:25:07Z</StartTime><EndTime>2014-12-04T01:25:07Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.193.68</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm9825.d9.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3017',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'dab2f2f8afb186d5bdbc3ae25cc33316',
  date: 'Mon, 16 Mar 2015 01:37:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>testwinvm125</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>c2dd7acbf07d4d1b895306f47570c7b7</PrivateID><Status>Running</Status><Label>dGVzdHdpbnZtMTI1</Label><Url>http://testwinvm125.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ0ZXN0d2ludm0xMjUiPg0KICAgIDxJbnN0YW5jZXMgY291bnQ9IjEiIC8+DQogIDwvUm9sZT4NCjwvU2VydmljZUNvbmZpZ3VyYXRpb24+</Configuration><RoleInstanceList><RoleInstance><RoleName>testwinvm125</RoleName><InstanceName>testwinvm125</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Medium</InstanceSize><InstanceStateDetails/><IpAddress>100.112.100.119</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>PowerShell</Name><Vip>104.210.41.12</Vip><PublicPort>5986</PublicPort><LocalPort>5986</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint><InstanceEndpoint><Name>Remote Desktop</Name><Vip>104.210.41.12</Vip><PublicPort>55820</PublicPort><LocalPort>3389</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><HostName>testwinvm125</HostName><RemoteAccessCertificateThumbprint>6C41918C8EC2C62EA51E9DD8F7B277BD7EFD0497</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-16T01:35:23Z</Timestamp><GuestAgentVersion>2.5.1198.702</GuestAgentVersion><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>GuestAgent is running and accepting new configurations.</Message></FormattedMessage></GuestAgentStatus><ResourceExtensionStatusList><ResourceExtensionStatus><HandlerName>Chef.Bootstrap.WindowsAzure.ChefClient</HandlerName><Version>11.16.4.2</Version><Status>Installing</Status><FormattedMessage><Language>en-US</Language><Message>Installing plugin (name: Chef.Bootstrap.WindowsAzure.ChefClient, version: 11.16.4.2)</Message></FormattedMessage></ResourceExtensionStatus><ResourceExtensionStatus><HandlerName>Microsoft.Compute.BGInfo</HandlerName><Version>1.1</Version><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>Plugin enabled (name: Microsoft.Compute.BGInfo, version: 1.1).</Message></FormattedMessage></ResourceExtensionStatus></ResourceExtensionStatusList></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>testwinvm125</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>5986</LocalPort><Name>PowerShell</Name><Port>5986</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>3389</LocalPort><Name>Remote Desktop</Name><Port>55820</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><ResourceExtensionReferences><ResourceExtensionReference><ReferenceName>BGInfo</ReferenceName><Publisher>Microsoft.Compute</Publisher><Name>BGInfo</Name><Version>1.*</Version><ResourceExtensionParameterValues/><State>Enable</State></ResourceExtensionReference><ResourceExtensionReference><ReferenceName>ChefClient</ReferenceName><Publisher>Chef.Bootstrap.WindowsAzure</Publisher><Name>ChefClient</Name><Version>11.*</Version><ResourceExtensionParameterValues><ResourceExtensionParameterValue><Key>ChefClientPublicConfigParameter</Key><Value>eyJjbGllbnRfcmIiOiJsb2dfbGV2ZWwgICAgICAgIDppbmZvXHJcbmxvZ19sb2NhdGlvbiAgICAgXCJjOi9jaGVmL2xvZ3NcIlxyXG5jaGVmX3NlcnZlcl91cmwgIFwiaHR0cHM6Ly9hcGkub3BzY29kZS5jb20vb3JnYW5pemF0aW9ucy9vcmduYW1lXCJcclxudmFsaWRhdGlvbl9jbGllbnRfbmFtZSBcdFwib3JnbmFtZS12YWxpZGF0b3JcIiIsImF1dG9VcGRhdGVDbGllbnQiOiJmYWxzZSJ9</Value><Type>Public</Type></ResourceExtensionParameterValue></ResourceExtensionParameterValues><State>Enable</State></ResourceExtensionReference></ResourceExtensionReferences><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>testwinvm125-testwinvm125-0-201503150334060989</DiskName><MediaLink>https://portalvhds38v5hbggr1fmp.blob.core.windows.net/vhds/testwinvm125-testwinvm125-2015-03-15.vhd</MediaLink><SourceImageName>a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201502.01-en.us-127GB.vhd</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Medium</RoleSize><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-15T03:34:03Z</CreatedTime><LastModifiedTime>2015-03-16T01:35:35Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>104.210.41.12</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>testwinvm125ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>testwinvm125.d6.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '5621',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2c2e19cfe66281b196e29f2b6aafa35b',
  date: 'Mon, 16 Mar 2015 01:37:35 GMT' });
 return result; }]];