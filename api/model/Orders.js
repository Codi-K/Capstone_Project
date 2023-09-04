const db = require("../config");

class Orders {
  fetchOrders(req, res) {
    const query = `
        SELECT o.orderID, u.userID, b.boatID, b.boatName, b.amount, b.boatUrl
        FROM Orders o
        INNER JOIN Users u
        USING(userID)
        INNER JOIN Boats b
        USING(boatID);
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  //   fetchOrder(req, res) {
  //     const query = `
  //         SELECT SELECT o.orderID, u.userID, b.boatID, o.orderDate
  //         FROM Orders o
  //          INNER JOIN Users u
  //          USING(userID)
  //          INNER JOIN Books b
  //          USING(boatID)
  //          WHERE orderID = ${req.params.orderID};
  //         `;
  //     db.query(query, [req.params.orderID], (err, results) => {
  //       if (err) throw err;
  //       res.json({
  //         status: res.statusCode,
  //         results,
  //       });
  //     });
  //   }
  insertOrder(userID, boatID, req, res) {
    const query = `
        INSERT INTO Orders VALUES(DEFAULT, ?, ?)
        `;
    const values = [userID, boatID]

    db.query(query, values, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "item added successfully",
      });
    });
  }
  // async updateOrder(req, res) {
  //   const query = `
  //       UPDATE Orders SET orderDate = ${new Date().now}
  //   `;
  //   db.query(query, (err) => {
  //     if (err) throw err;
  //     res.json({
  //       status: res.statusCode,  
  //       msg: "item date updated successfully",
  //     });
  //   });
  // }
  removeOrders(req, res) {
    const query = `
        DELETE FROM Orders WHERE OrderID = ${req.params.orderID}
    `;
    db.query(query, [req.params.orderID], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Item deleted successfully!",
      });
    });
  }
  removeOrder(req, res) {
    const query = `
        TRUNCATE TABLE Orders
    `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Cart deleted successfully!",
      });
    });
  }
}

module.exports = Orders;
