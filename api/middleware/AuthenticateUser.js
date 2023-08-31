require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

//create a token
function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}
// verify A Token
function verifyAToken(req, res, next) {
  try {
    
    const token = req.header["Authorization"];
    console.log(req.header["Authorization"]);
    const decoded = verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next();
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: e.message,
    });
  }
}

module.exports = {
  createToken,
  verifyAToken,
};
