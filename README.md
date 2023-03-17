# Backend

Mettre info pr variables d'environnement

npm install
npm start

# Routes

---

Route POST test signup :
http://localhost:4000/api/authentification/signup

TEST Postman :
nouvelle requete, en POST, avec l'adresse au dessus.
Dans body, se mettre en raw, format JSON et entrer ce modele :

{  
 "nom" : "test8",
"email" : "test8@test.com",
"password" : "testpassworD08",
"couverts" : "6"
}

---

Route POST test login :
http://localhost:4000/api/authentification/login

TEST Postman :
dupliquer le signup, mettre login a la place de signup dans l'adresse.
Remplacer le body par :

{  
 "email" : "test8@test.com",
"password" : "testpassworD08"
}

---

Route POST test créer fiche user :
http://localhost:4000/api/fiche_user/

TEST Postman :
Créer une requete POST avec l'adresse ci dessus.
Coller le token dans authorization.
Mettre ce code dans le body en raw JSON en changeant votre id et votre nom

{
"fiche_user":{
"userId": "37",
"nom": "test8",
"couverts": 12,
"fruitsCoques": 0,
"arachide": 1,
"oeuf": 0,
"lait": 1,
"autre": null
}
}

---

Route GET test afficher tous les objets fiche user :
http://localhost:4000/api/fiche_user/?userId=39

TEST Postman :
Recuperer le Token obtenu precedement et l'userId.
Créer une requete Get avec l'adresse ci dessus en creant le params userId avec la valeur de votre id.
Dans authorization, mettre le type Bearer Token, puis coller le token recuperer precedement
Puis dans body , mettre none

---

Route GET test afficher un objet avec l'id :
http://localhost:4000/api/fiche_user/fiche/?userId=37

TEST Postman :
Duppliquez la requete precedente.
Rajouter le /fiche/ dans l'adresse

---

Route PUT test modifier un objet avec l'id :
http://localhost:4000/api/fiche_user/:id

TEST Postman :
adresse ex: http://localhost:4000/api/fiche_user/19?userId=39
Mettre en PUT,
Mettre le token dans authorization,
Dans params, mettre une key userId, et sa valeur dans value ( 39)
Entrer le code suivant dans body, raw JSON :

{
"fiche_user":{
"userId": "39",
"nom": "test9",
"couverts": 5,
"fruitsCoques": 0,
"arachide": 1,
"oeuf": 0,
"lait": 1,
"autre": null
}
}

---

Route DELETE test Supprimer un objet avec l'id:
http://localhost:4000/api/fiche_user/:id

TEST Postman:
Duppliquer le test PUT.
Le mettre en DEL
