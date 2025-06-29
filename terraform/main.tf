# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = "rg-web-portfolio"
  location = "East US 2"
}

# Create Static Web App to host the React application
resource "azurerm_static_web_app" "portfolio" {
  name                = "web-portfolio-bgc"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku_tier            = "Free"
  sku_size            = "Free"
  depends_on          = [azurerm_resource_group.rg]
}
