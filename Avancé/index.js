// ------------------------------------------------------------------------------------ //
//                                      EXERCICE 1                                      //
// ------------------------------------------------------------------------------------ //
/* Déterminez à partir de l'âge si une personne est :
Enfant (en dessous ou égale à 10 ans)
Adolescent (entre 11 et 17 ans)
Majeur (au-dessus de 18 ans)
Senior (au-dessus de 50 ans) */

const determineAge = (age) => {
    if (age <= 10) {
        console.log("Enfant");
    } else if (age >= 11 && age <= 17) {
        console.log("Adolescent");
    } else if (age >= 18 && age <= 49) {
        console.log("Majeur");
    } else {
        console.log("Senior");
    }
}
determineAge(99);


// ------------------------------------------------------------------------------------ //
//                                      EXERCICE 2                                      //
// ------------------------------------------------------------------------------------ //
/* Calculez la moyenne de plusieurs notes
Spécifications techniques
Une fonction qui prend en paramètre un tableau et renvoie la moyenne */

let notes = [12, 8, 20, 10];

function avgCalculator(notes) {
    let sum = 0;

    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }

    let avg = sum / notes.length;

    return avg;
}

console.log(avgCalculator(notes));


// ------------------------------------------------------------------------------------ //
//                                      EXERCICE 3                                      //
// ------------------------------------------------------------------------------------ //
/* Calculez le prix TTC d'un produit
Spécifications techniques
Prix hors taxes et taux de la tva en entrée (paramètres de votre fonction)
La fonction retourne le prix TTC */

let prix_HT;
let tva = 0.2;

function calculTVA(ht, tva) {
    
}