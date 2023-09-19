import { Ihm } from "./class/ihm.js";
import { Parking } from "./class/parking.js";

let parking = new Parking() ;
console.log(parking.listVoiture);
const btnPayer = document.querySelector("#btnPayer") ;

btnPayer.addEventListener("click", () => {
    if (!btnPayer.disabled) {
        let numPlaque = Ihm.getNumPlaque();
        if (numPlaque) {
            if (parking.knowCar(numPlaque) >= 0) {
                Ihm.affichMessage(`Le prix à payer pour le véhicule ${numPlaque} est de ${parking.aPayer(numPlaque)}€`,'warning')
                parking.delCar(numPlaque);
            } else {
                Ihm.affichMessage(`Aucun véhicule immatriculé ${numPlaque} enregistré !`,'danger');
            };

        }
    }
})


const btnTicket = document.querySelector("#btnTicket") ;

btnTicket.addEventListener("click", () => {

    if (!btnTicket.disabled) {
        let numPlaque = Ihm.getNumPlaque();
        if (numPlaque) {
            if (parking.knowCar(numPlaque) == -1) {
                parking.addCar(numPlaque);
                console.log(parking.listVoiture);
                Ihm.affichMessage(`Veuillez prendre votre ticket  pour le véhicule ${numPlaque}`,'success')
            } else {
                Ihm.affichMessage(`Le véhicule immatriculé ${numPlaque} a déjà un ticket de parking !`,'danger');
                console.log(parking.listVoiture);
            };
        }
    }   
})



