const LoginPage = require("./login.page");
const InventoryPage = require("./inventory.page");

const items = {
  login: new LoginPage(),
  inventory: new InventoryPage(),
};
/**
 *
 * @param name {'login' | 'inventory'}
 * @returns {LoginPage | InventoryPage}
 */
function pages(name) {
  return items[name.toLowerCase()];
}

module.exports = {
  pages,
};
