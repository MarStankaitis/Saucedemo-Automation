const InventoryHeaderComponent = require("../components/inventory/inventoryheader.compenent");

class InventoryPage {
  constructor() {
    this.inventoryHeader = new InventoryHeaderComponent();
  }
}

module.exports = new InventoryPage();
