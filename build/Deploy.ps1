$rgName = "RelayCalculator"
$location = "westeurope"
$bicepFile = "relay-calculator.bicep"
$templateFile = "relay-calculator.json"
$templateParameterFile = "relay-calculator.parameters.test.json"
$login = "marijejansen"
$password = "abc123ABC!"

New-AzResourceGroup -Name $rgName -Location $location
# Build-Bicep -Path $bicepFile
New-AzResourceGroupDeployment `
    -ResourceGroupName $rgName `
    -TemplateFile $bicepFile `
    -TemplateParameterFile $templateParameterFile `
    # -WhatIf 