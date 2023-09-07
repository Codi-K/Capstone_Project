const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const { verifyAToken } = require("../middleware/AuthenticateUser");

// Import all model objects
const { users, boats, orders } = require("../model");


//========= User router ==========

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});

routes.get("/user/:id", (req, res) => {
  users.fetchUsers(req, res);
});

routes.post("/register", bodyParser.json(), (req, res) => {
  users.resgister(req, res);
});

routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

routes.post("/user", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

//================== Boats Router ==================

routes.get("/items", (req, res) => {
  boats.fetchBoats(req, res);
});

routes.get("/item/:id", (req, res) => {
  boats.fetchBoat(req, res);
});

routes.post("/items", bodyParser.json(), (req, res) => {
  boats.addBoat(req, res);
});

routes.patch("/item/:id", bodyParser.json(), (req, res) => {
  boats.updateBoat(req, res);
});

routes.delete("/item/:id", (req, res) => {
  boats.deleteBoat(req, res);
});


//================== Orders Router ==================

routes.get("/user/:id/carts", (req, res) => {
  orders.fetchOrders(req, res);
});

routes.post("/user/:id/cart", bodyParser.json(), (req, res) => {
  const userID = req.params.userID
  const boatID = req.params.boatID
  orders.insertOrder(userID, boatID, req, res);
});

routes.patch("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
});

routes.delete("/user/:id/cart", (req, res) => {
  orders.removeOrder(req, res);
});

routes.delete("/user/:id/cart/:id", (req, res) => {
  orders.removeOrders(req, res);
});

module.exports = {
  express,
  routes,
};
