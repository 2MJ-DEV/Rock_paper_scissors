// var Players = prompt("Faite votre choix : ");
// choixplayer = prompt(("Choisissez : ")["Pierre", "Feuille", "Ciseaux"])

// function Player1() {
//     prompt ("Choisissez : ");

// };

// Initialiser les choix possibles
// const CHOIX = ["1", "2", "3"];

// // Fonction pour obtenir le choix du joueur
// function obtenirChoixJoueur() {
//     let choixJoueur = "";
//     while (!CHOIX.includes(choixJoueur)) {
//         choixJoueur = prompt("Choisissez Pierre, Feuille ou Ciseaux :").trim();
//         if (!CHOIX.includes(choixJoueur)) {
//             console.log("Choix invalide. Veuillez choisir à nouveau.");
//         }
//     }
//     return choixJoueur;
// }

// // Fonction pour obtenir le choix de l'ordinateur
// function obtenirChoixOrdinateur() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     return CHOIX[randomIndex];
// }

// // Fonction pour déterminer le gagnant
// function determinerGagnant(choixJoueur, choixOrdinateur) {
//     if (choixJoueur === choixOrdinateur) {
//         return "Égalité !";
//     } else if (
//         (choixJoueur === "Pierre" && choixOrdinateur === "Ciseaux") ||
//         (choixJoueur === "Feuille" && choixOrdinateur === "Pierre") ||
//         (choixJoueur === "Ciseaux" && choixOrdinateur === "Feuille")
//     ) {
//         return "Le joueur gagne !";
//     } else {
//         return "L'ordinateur gagne !";
//     }
// }


// let jouerEncore = "1";

// do {
//     let choixJoueur = obtenirChoixJoueur();
//     let choixOrdinateur = obtenirChoixOrdinateur();

//     console.log("Vous avez choisi : " + choixJoueur);
//     console.log("L'ordinateur a choisi : " + choixOrdinateur);

//     let resultat = determinerGagnant(choixJoueur, choixOrdinateur);
//     console.log(resultat);
// }
//     // jouerEncore = prompt("Voulez-vous jouer à nouveau ? (1/X)").toUpperCase();
// // } while (jouerEncore === "1");

// // console.log("Merci d'avoir joué !");


// Initialiser les choix possibles
const CHOIX = ["Pierre", "Feuille", "Ciseaux"];
// Un tableau constant qui contient les trois options du jeu : "Pierre", "Feuille", et "Ciseaux".

// Fonction pour obtenir le choix du joueur
function obtenirChoixJoueur() {
    let choixJoueur = ""; // Initialise une variable vide pour stocker le choix du joueur
    while (!CHOIX.includes(choixJoueur)) { // Boucle tant que le choix du joueur n'est pas valide
        choixJoueur = prompt("Choisissez Pierre, Feuille ou Ciseaux :").trim(); 
        // Demande au joueur d'entrer son choix et enlève les espaces superflus autour du texte

        if (!CHOIX.includes(choixJoueur)) { // Vérifie si le choix du joueur est dans la liste des choix valides
            console.log("Choix invalide. Veuillez choisir à nouveau."); 
            // Si le choix n'est pas valide, affiche un message d'erreur dans la console
        }
    }
    return choixJoueur; // Retourne le choix valide du joueur
}

// Fonction pour obtenir le choix de l'ordinateur
function obtenirChoixOrdinateur() {
    let randomIndex = Math.floor(Math.random() * 3); 
    // Génère un index aléatoire entre 0 et 2, correspondant à une position dans le tableau CHOIX
    return CHOIX[randomIndex]; // Retourne le choix de l'ordinateur en utilisant l'index généré
}

// Fonction pour déterminer le gagnant
function determinerGagnant(choixJoueur, choixOrdinateur) {
    if (choixJoueur === choixOrdinateur) { // Si les deux choix sont identiques
        return "Égalité !"; // Retourne "Égalité !" car personne ne gagne
    } else if (
        (choixJoueur === "Pierre" && choixOrdinateur === "Ciseaux") || // Conditions où le joueur gagne
        (choixJoueur === "Feuille" && choixOrdinateur === "Pierre") ||
        (choixJoueur === "Ciseaux" && choixOrdinateur === "Feuille")
    ) {
        return "Le joueur gagne !"; // Si une de ces conditions est remplie, le joueur gagne
    } else {
        return "L'ordinateur gagne !"; // Sinon, c'est l'ordinateur qui gagne
    }
}

// Variables pour compter les scores
let scoreJoueur = 0; // Initialise le score du joueur à 0
let scoreOrdinateur = 0; // Initialise le score de l'ordinateur à 0
let nombreParties = 3; // Nombre total de parties à jouer, ici fixé à 3

// Boucle pour 3 parties
for (let i = 1; i <= nombreParties; i++) { // Boucle pour exécuter 3 parties
    console.log(`Manche ${i}`); // Affiche le numéro de la Manche actuelle

    let choixJoueur = obtenirChoixJoueur(); // Appelle la fonction pour obtenir le choix du joueur
    let choixOrdinateur = obtenirChoixOrdinateur(); // Appelle la fonction pour obtenir le choix de l'ordinateur

    console.log("Vous avez choisi : " + choixJoueur); // Affiche le choix du joueur
    console.log("L'ordinateur a choisi : " + choixOrdinateur); // Affiche le choix de l'ordinateur

    let resultat = determinerGagnant(choixJoueur, choixOrdinateur); // Détermine qui est le gagnant de la partie
    console.log(resultat); // Affiche le résultat de la Manche(joueur, ordinateur ou égalité)

    // Mise à jour des scores
    if (resultat === "Le joueur gagne !") { // Si le joueur gagne
        scoreJoueur++; // Incrémente le score du joueur
    } else if (resultat === "L'ordinateur gagne !") { // Si l'ordinateur gagne
        scoreOrdinateur++; // Incrémente le score de l'ordinateur
    }

    console.log(`Score actuel - Joueur : ${scoreJoueur}, Ordinateur : ${scoreOrdinateur}`);
    // Affiche le score actuel après chaque partie
    console.log('-------------------------'); // Affiche une ligne de séparation pour la lisibilité
}

// Affichage du résultat final après 3 parties
console.log("Parties terminées !"); // Informe que toutes les parties sont terminées
if (scoreJoueur > scoreOrdinateur) { // Si le score du joueur est supérieur à celui de l'ordinateur
    console.log("Félicitations, vous avez gagné la série !"); // Le joueur gagne la série
} else if (scoreJoueur < scoreOrdinateur) { // Si le score de l'ordinateur est supérieur à celui du joueur
    console.log("L'ordinateur a gagné la série !"); // L'ordinateur gagne la série
} else { // Si les scores sont égaux
    console.log("La série se termine par une égalité !"); // Il y a une égalité à la fin de la série
}
