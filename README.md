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
http://localhost:4000/api/fiche_user/

TEST Postman :
Recuperer le Token obtenu precedement et l'userId.
Créer une requete Get avec l'adresse ci dessus.
Dans authorization, mettre le type Bearer Token, puis coller le token recuperer precedement
Puis dans body en raw format JSON, coller en remplacant votre Id :

{
"fiche_user":{

        "userId": "37"

}
}

---

Route GET test afficher un objet avec l'id :
http://localhost:4000/api/fiche_user/:id

TEST Postman :
Duppliquez la requete precedente.
Rajouter votre id de id_fiche_user dans l'adresse pour selectionner la modif

---

Route PUT test modifier un objet avec l'id :
http://localhost:4000/api/fiche_user/:id
