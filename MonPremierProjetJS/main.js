// Classe pour 1 combattant
// Classe Combattant : pour créer un personnage avec des caractéristiques de combat
class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom; // Le nom du combattant
        this.pointsDeVie = pointsDeVie; // Ses points de vie (PV)
        this.attaque = attaque; // La puissance de ses attaques
        this.precision = precision; // Sa précision pour réussir une attaque
    }

    getattack(cible){
        cible.pointsDeVie = cible.pointsDeVie-this.attaque
        return console.log(cible.nom + " a maintenant " + cible.pointsDeVie + "PV")
    }
      
chancetouche(){
            return Math.random()
        }
    }

// Création des combattants
let bigMac = new Combattant("BigMac", 100, 15, 0.8); // Guerrier avec 100 PV, attaque à 15 et précision de 80%
let mcChicken = new Combattant("McChicken", 120, 20, 0.6); // Guerrier avec 120 PV, attaque à 20 et précision de 60%

// Fonction pour gérer le combat
function combat(bigMac, mcChicken) {
    console.log("Le combat commence entre " + bigMac.nom + " et " + mcChicken.nom + " !");
    console.log("---");}

    // Tant qu'aucun des deux combattants n'est KO (0 PV)
    while (bigMac.pointsDeVie > 0 && mcChicken.pointsDeVie > 0) {
        // BigMac attaque McChicken
        console.log("BigMac lance une attaque")     
if (bigMac.chancetouche()<bigMac.precision){
    console.log("BigMac Reussi son Attaque et inflige 15 PV à McChicken !") 
    bigMac.getattack(mcChicken)   
}else {
    console.log("BigMac rate son attaque");}
 if(mcChicken.pointsDeVie>0){
    console.log("McChicken Lance une attaque")   

if(mcChicken.chancetouche()<mcChicken.precision){
    console.log("McChicken Reussi son Attaque et inflige 20 Pv à BigMac!") 
    mcChicken.getattack(bigMac)
}
else{
 console.log("McChicken rate son attaque");
}}
            
// Vérifier si McChicken est KO
    if (mcChicken.pointsDeVie <= 0) {
        console.log(mcChicken.nom + " n'a plus de points de vie !");
        console.log(bigMac.nom + " remporte la victoire !");
        break; // Arrête le combat
    }

// Vérifier si BigMac est KO
    if (bigMac.pointsDeVie <= 0) {
        console.log(bigMac.nom + " n'a plus de points de vie !");
        console.log(mcChicken.nom + " remporte la victoire !");
        break; // Arrête le combat
    }
}
