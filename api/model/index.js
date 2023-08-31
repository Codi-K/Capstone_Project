const Users = require("./Users");
const Orders = require("./Orders");
const Boats = require("./Boats");

// export all files

module.exports = {
  users: new Users(),
  orders: new Orders(),
  boats: new Boats()
};
