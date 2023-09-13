const db = require("../config");

class Boats {
  fetchBoats(req, res) {
    const query = `
        SELECT boatID, boatName, boatDesc, amount, quantity, Category, boatUrl
        FROM Boats;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchBoat(req, res) {
    const query = `
        SELECT boatID, boatName, boatDesc, amount, quantity, Category, boatUrl
        FROM Boats
        WHERE boatID = ${req.params.id};
        `;

    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async addBoat(req, res) {
    const data = req.body;
    //query
    const query = `
        INSERT INTO Boats
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Boat has been added",
      });
    });
  }
  updateBoat(req, res) {
    const query = `
        UPDATE Boats
        SET ?
        WHERE boatID = ?;
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The Boat was updated",
      });
    });
  }
  deleteBoat(req, res) {
    const query = `
        DELETE FROM Boats
        WHERE boatID = ${req.params.id};
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The Boat was deleted",
      });
    });
  }
}

module.exports = Boats;
