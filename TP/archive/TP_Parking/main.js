import { Ihm } from "./class/ihm.js";
import { Parking } from "./class/parking.js";

let parking = new Parking() ;
const btnPayer = document.querySelector("#btnPayer") ;
const btnTicket = document.querySelector("#btnTicket") ;

btnPayer.onclick = () => {
    if (!btnPayer.disabled) {
        let numPlaque = Ihm.getNumPlaque();
        if (numPlaque) {
            if (parking.knowCar(numPlaque) >= 0) {
                if (parking.actualParkCar(numPlaque)) {
                    Ihm.affichMessage(`Le prix à payer pour le véhicule ${numPlaque} est de ${parking.aPayer(numPlaque)}€`,'warning')
                    parking.archivCar(numPlaque);
                } else {
                    Ihm.affichMessage(`Le véhicule immatriculé ${numPlaque} n'est pas garé dans parking !`,'danger');
                }
            } else {
                Ihm.affichMessage(`Aucun véhicule immatriculé ${numPlaque} enregistré !`,'danger');
            };
        }
    }
}


btnTicket.onclick = () => {
    if (!btnTicket.disabled) {
        let numPlaque = Ihm.getNumPlaque();
         if (numPlaque) {
            if ( parking.knowCar(numPlaque) >= 0 ) {
                if (!parking.actualParkCar(numPlaque)) {
                    parking.updateCar(numPlaque);
                    Ihm.affichMessage(`Veuillez prendre votre ticket pour le véhicule ${numPlaque}`,'success')
                } else {
                    Ihm.affichMessage(`Le véhicule immatriculé ${numPlaque} a déjà un ticket de parking !`,'danger');
                }
            }  else {
                parking.addCar(numPlaque);
                Ihm.affichMessage(`Veuillez prendre votre ticket pour le véhicule ${numPlaque}`,'success')
            }
        }
    }   
}


// hors sujet pour test / vérification  

const page = document.querySelector('body');

let btnClg = document.createElement('button');
btnClg.type = "button" ;
btnClg.className = "d-block ms-auto mt-5" ;
btnClg.innerText = "clg(historique)";
btnClg.onclick = () => {
    parking.displayParking();
}

page.appendChild(btnClg);




