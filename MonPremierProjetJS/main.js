// Classe pour 1 combattant
// Classe Combattant : pour créer un personnage avec des caractéristiques de combat
class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom; 
        this.pointsDeVie = pointsDeVie; 
        this.attaque = attaque; 
        this.precision = precision; 
    }

    getattack(cible){
        cible.pointsDeVie = cible.pointsDeVie-this.attaque
        return console.log(cible.nom + " a maintenant " + cible.pointsDeVie + "PV")
    }
      
chancetouche(){
            return Math.random()
        }
    }

let bigMac = new Combattant("BigMac", 100, 15, 0.8); 
let mcChicken = new Combattant("McChicken", 120, 20, 0.6); 

function combat(bigMac, mcChicken) {
    console.log("Le combat commence entre " + bigMac.nom + " et " + mcChicken.nom + " !");
    console.log("---");}

    while (bigMac.pointsDeVie > 0 && mcChicken.pointsDeVie > 0) {
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
            
    if (mcChicken.pointsDeVie <= 0) {
        console.log(mcChicken.nom + " n'a plus de points de vie !");
        console.log(bigMac.nom + " remporte la victoire !");
        break; 
    }

    if (bigMac.pointsDeVie <= 0) {
        console.log(bigMac.nom + " n'a plus de points de vie !");
        console.log(mcChicken.nom + " remporte la victoire !");
        break; 
    }
}
