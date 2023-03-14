exports.createFicheUser = async (req, res) => {
  console.log(req.body);
  console.log(req.body.ficheUser);
  console.log(req.file);

  const userFicheObject = JSON.parse(req.body.ficheUser);

  const { userId, nom, couverts, fruitsCoques, arachide, oeuf, lait, autre } =
    userFicheObject;
  //   console.log(userId);

  const ficheUser = new FicheUser(
    userId,
    nom,
    couverts,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  );
  /**  INSERT INTO `fiche_user`(`fiche_user_userId`, `fiche_user_nom`, `fiche_user_couverts`, `fiche_user_fruitsCoques`, `fiche_user_arachide`, `fiche_user_oeuf`, `fiche_user_lait`, `fiche_user_autre`)
   *  VALUES ('35','test7','5','0','1','0','1', NULL)   */
  try {
    // const querySql = `INSERT INTO 'fiche_user'(fiche_user_userId, fiche_user_nom, fiche_user_couverts, fiche_user_fruitsCoques, fiche_user_arachide, fiche_user_oeuf, fiche_user_lait, fiche_user_autre)
    //     VALUES ('35','test7','5','0','1','0','1', NULL) `;
    const querySql = `INSERT INTO \`fiche_user\` (fiche_user_userId, fiche_user_nom, fiche_user_couverts, fiche_user_fruitsCoques, fiche_user_arachide, fiche_user_oeuf, fiche_user_lait, fiche_user_autre) 
          VALUES ('35', 'test7', '5', '0', '1', '0', '1', NULL)`;

    const ficheUser = await mysqlconnection.query(
      querySql,
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
