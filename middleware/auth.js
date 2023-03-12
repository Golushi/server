// Import
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Import fonction
module.exports = (req, res, next) => {
  try {
    // Recuperer token
    console.log("---------> middleware d'auth");
    console.log(req.headers.authorization);

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    // Decoder token
    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    console.log(decodedToken);

    // Recuperer userId decoder
    const userIdDecodedToken = decodedToken.userId;
    console.log(userIdDecodedToken);

    console.log("-----------------------------");
    console.log(req.body.ficheUser.userId);

    // Comparer
    if (
      req.body.ficheUser.userId &&
      req.body.ficheUser.userId === userIdDecodedToken
    ) {
      next();
    } else {
      throw "User Id non valide";
    }

    // Passer au middleware suivant
  } catch (error) {
    res.status(401).json({ error });
  }
};
