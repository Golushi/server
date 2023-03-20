class booking {
  constructor(
    nom,
    couverts,
    dateReservation,
    heureReservation,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  ) {
    this.nom = nom;
    this.couverts = couverts;
    this.dateReservation = dateReservation;
    this.heureReservation = heureReservation;
    this.fruitsCoques = fruitsCoques;
    this.arachide = arachide;
    this.oeuf = oeuf;
    this.lait = lait;
    this.autre = autre;
  }
  static isValide(couverts) {
    return couverts >= 1 && couverts <= 20;
  }
}

// Export module
module.exports = booking;
