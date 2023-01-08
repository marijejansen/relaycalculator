param location string = resourceGroup().location // Location for all resources
var appServicePlanName = toLower('relay-calculator-asp')
param appServiceHostingSkuName string
param appServiceSkuCapacity int
var appName = 'relay-calculator'
var appInsightsAppName = 'relay-calculator-insights'


resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: appServicePlanName
  location: location
  sku: {
    tier: 'Standard'
    name: appServiceHostingSkuName
    capacity: appServiceSkuCapacity
  }
}

resource app 'Microsoft.Web/sites@2020-06-01' = {
  name: appName
  location: location
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: appServicePlan.id
  }
}

resource appInsightsApp 'Microsoft.Insights/components@2015-05-01' = {
  name: appInsightsAppName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

