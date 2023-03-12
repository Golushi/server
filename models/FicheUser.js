class fiche_user {
  constructor(
    userId,
    nom,
    couverts,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  ) {
    this.userId = userId;
    this.nom = nom;
    this.couverts = couverts;
    this.fruitsCoques = fruitsCoques;
    this.arachide = arachide;
    this.oeuf = oeuf;
    this.lait = lait;
    this.autre = autre;
  }
}

// Export module
module.exports = fiche_user;
