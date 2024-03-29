// Import cryptoJS
const cryptojs = require("crypto-js");

// Import bcrypt
const bcrypt = require("bcrypt");

// Import variables d'env
const dotenv = require("dotenv");
const result = dotenv.config();

class User {
  constructor(nom, email, password, couverts) {
    this.nom = nom;
    this.email = email;
    this.password = password;
    this.couverts = couverts;
  }

  // Chiffrer l'email
  emailChiffrement() {
    const emailCryptoJs = cryptojs
      .HmacSHA256(this.email, `${process.env.CRYPTOJS_EMAIL}`)
      .toString();
    return emailCryptoJs;
  }

  // hash password
  hashPassword = async function () {
    try {
      const hashPassword = bcrypt.hash(this.password, 10);
      return hashPassword;
    } catch (err) {
      console.log(err);
    }
  };

  static isValide(couverts) {
    return couverts >= 1 && couverts <= 20;
  }
}

// Export module
module.exports = User;
