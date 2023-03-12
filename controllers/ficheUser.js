// Import models
const FicheUser = require("../models/FicheUser");

exports.createFicheUser = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.ficheUser);

  const userFicheObject = req.body.ficheUser;

  console.log(userFicheObject);

  // Instance FicheUser
  const ficheUser = new FicheUser({
    userFicheObject,
  });
  console.log("------------------------------------>");
  console.log(ficheUser);

  // Enregistrer l'objet
};

exports.readAllFicheUser = (req, res, next) => {};

exports.readOneFicheUser = (req, res, next) => {
  console.log({ _id: req.params.id });
};

exports.updateOneFicheUser = (req, res, next) => {};

exports.deleteOneFicheUser = (req, res, next) => {};
