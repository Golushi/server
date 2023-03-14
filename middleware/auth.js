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
    console.log("--------------------> token");
    console.log(token);

    // Decoder token
    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    console.log("--------------------------> decodedToken");
    console.log(decodedToken);

    console.log("--------------------> req");
    console.log(req);

    // Recuperer userId decoder
    const userIdDecodedToken = decodedToken.userId;
    console.log("--------> userId decoded TOKEN");
    console.log(userIdDecodedToken);

    console.log("--------> userId dans request");
    console.log(req.body.fiche_user.userId);

    // Comparer

    if (req.body.fiche_user.userId == userIdDecodedToken) {
      next();
    } else {
      throw "Erreur identification";
    }

    // Passer au middleware suivant
  } catch (error) {
    res.status(401).json({ message: "Echec Authentification", error: error });
  }
};
