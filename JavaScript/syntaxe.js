var prenom = "Alex";
console.log(prenom);

var ville = "Montréal";
console.log(ville);
ville = "Victoriaville";
console.log(ville);


var age = 17;
var nom = "Pelchat";
var estConnecte = true;
console.table(age, nom, estConnecte);
console.table({age:age, lastname:nom, linked:estConnecte});


const PI = 3.1416;
var circonference = (2*PI*4);
console.log("La criconference d'un cercle ayant un rayon de 4cm est : ", circonference);


var nomEleve = "Pelchat"; var prenomEleve = "Alex"; var age = 17;
console.log("Je m'appelle " + prenomEleve + " " + nomEleve + " et j'ai " + age + " ans");
console.log(`Je m'appelle ${prenomEleve} ${nomEleve} et j'ai ${age} ans`)