// Import models
const fiche_user = require("../models/FicheUser");
console.log("--------> FicheUser");
console.log(fiche_user);

// Import connection mysql
const mysqlconnection = require("../db/db.mysql");

exports.createFicheUser = async (req, res) => {
  console.log(req.body);
  console.log(req.body.fiche_user);
  console.log(req.file);

  const userFicheObject = req.body.fiche_user;

  console.log("--------> userFicheObject");
  console.log(userFicheObject);

  const { userId, nom, couverts, fruitsCoques, arachide, oeuf, lait, autre } =
    userFicheObject;
  //   console.log(userId);

  const ficheUser = new fiche_user(
    userId,
    nom,
    couverts,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  );

  try {
    const querySql = `INSERT INTO fiche_user (fiche_user_userId, fiche_user_nom, fiche_user_couverts, fiche_user_fruitsCoques, fiche_user_arachide, fiche_user_oeuf, fiche_user_lait, fiche_user_autre) 
        VALUES (?)`;

    const values = [
      userId,
      nom,
      couverts,
      fruitsCoques,
      arachide,
      oeuf,
      lait,
      autre,
    ];
    const ficheUser = await mysqlconnection.query(
      querySql,
      [values],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.readAllFicheUser = async (req, res) => {
  try {
    mysqlconnection.query(
      "SELECT * FROM `fiche_user` WHERE ?",
      ["1"],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.readOneFicheUser = async (req, res) => {
  console.log("Recup id!!!!!!!!");
  console.log(req.originalUrl.split("=")[1]);
  try {
    const id = req.originalUrl.split("=")[1];
    const querySql = "SELECT * FROM `fiche_user` WHERE `fiche_user_userId`= ?";

    mysqlconnection.query(querySql, [id], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        res.status(200).json({ results });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateOneFicheUser = async (req, res) => {
  console.log("----------------> Route PUT");
  console.log(req.params.id);

  // Chercher objet dans table ficheUser
  try {
    const id = req.params.id;
    // SELECT * FROM `fiche_user` WHERE `id_fiche_user` = 19
    const querySql = "SELECT * FROM fiche_user WHERE id_fiche_user = ?";

    const ficheUser = await mysqlconnection.query(
      querySql,
      [id],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          console.log("--------------------> Selection objet a modif");
          console.log(results);

          // controle autorisation modif par userId
          userIdParamsUrl = req.originalUrl.split("=")[1];
          console.log("---------> fiche_user_userId");
          console.log(userIdParamsUrl);
          console.log(results[0].fiche_user_userId);

          if (userIdParamsUrl == results[0].fiche_user_userId) {
            console.log("ça marche");

            console.log("-------------->reqbody");
            console.log(req.body);

            // console.log("-------------->reqbody.ficheUser");
            // console.log(req.body.fiche_user);

            // Requete SQL :
            //UPDATE `fiche_user` SET `fiche_user_nom`='test9',`fiche_user_couverts`='3',`fiche_user_fruitsCoques`='0',`fiche_user_arachide`='1',`fiche_user_oeuf`='1',`fiche_user_lait`='1',`fiche_user_autre`= null WHERE `id_fiche_user`= 19

            const {
              userId,
              nom,
              couverts,
              fruitsCoques,
              arachide,
              oeuf,
              lait,
              autre,
            } = req.body;
            // } = req.body.fiche_user;
            console.log("***************************");
            console.log(
              userId,
              nom,
              couverts,
              fruitsCoques,
              arachide,
              oeuf,
              lait,
              autre
            );

            const querySql = `
          UPDATE fiche_user SET
          fiche_user_nom = ?,
          fiche_user_couverts = ?,
          fiche_user_fruitsCoques = ?,
          fiche_user_arachide = ?,
          fiche_user_oeuf = ?,
          fiche_user_lait = ?,
          fiche_user_autre = ?
          WHERE id_fiche_user = ?
          `;

            const values = [
              nom,
              couverts,
              fruitsCoques,
              arachide,
              oeuf,
              lait,
              autre,
              id,
            ];
            console.log(
              "vvvvvvvvvvvvvvaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllluuuuuuuuuuueeeeeeeesssssssss"
            );
            console.log(values);

            mysqlconnection.query(querySql, values, (error, results) => {
              if (error) {
                res.status(500).json({ error });
              } else {
                res.status(201).json({ message: "mise a jour OK", results });
              }
            });
          } else {
            console.log("userId non autorisé à faire la modif");
            res.status(403).json({
              message: " Vous n'etes pas autoriser à modifier les données",
            });
          }
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteOneFicheUser = async (req, res) => {
  try {
    // Chercher l'id de l'objet a delete
    const id = req.params.id;
    console.log("---------id_delete");
    console.log(id);

    const querySql = "SELECT * FROM fiche_user WHERE id_fiche_user = ?";

    await mysqlconnection.query(querySql, [id], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        console.log("--------------------> Selection objet a delete");
        console.log(results);

        // Controle existence de la donnée pour eviter le crash
        if (results != 0) {
          console.log("objet present");
        } else {
          console.log("objet non present");
          return res.status(404).json({ message: "pas d'objet a supprimer" });
        }

        // controle autorisation modif par userId
        userIdParamsUrl = req.originalUrl.split("=")[1];
        console.log("---------> fiche_user_userId");
        console.log(userIdParamsUrl);
        console.log(results[0].fiche_user_userId);

        if (userIdParamsUrl == results[0].fiche_user_userId) {
          console.log("Supprimé");

          // Mettre a jour la bdd
          // DELETE FROM `fiche_user` WHERE `id_fiche_user` = 19

          const querySql = `
          DELETE FROM fiche_user
          WHERE id_fiche_user = ?
          `;
          const values = [id];
          console.log(values);

          // Connexion bdd

          mysqlconnection.query(querySql, values, (error, results) => {
            if (error) {
              res.status(500).json({ error });
            } else {
              res.status(201).json({ message: "Objet effacé", results });
            }
          });
        } else {
          console.log("pas autorisé");
          res.status(403).json({
            message: " Vous n'etes pas autoriser à modifier les données",
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Erreur",
    });
  }
};
