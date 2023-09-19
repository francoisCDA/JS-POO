import { Vehicule } from "./vehicule.js";
import { Tarif } from "./tarifs.js";


export class Parking {
    constructor() {
        this.listVoiture = [];
    }

    knowCar(num) {
        for (let i = 0 ; i < this.listVoiture.length ; i++) {
            if (this.listVoiture[i].plaque == num) {
                return i;
            } ;
            
        }
        
        return -1 ;
    }

    addCar(num) {
        this.listVoiture.push( new Vehicule(num) );
        console.log(this.listVoiture);
    }

    delCar(num) {
        this.listVoiture = this.listVoiture.filter((car) => car.plaque != num);
    }

    aPayer(num) {
        let hArr = this.listVoiture[this.knowCar(num)].heureArrivee ;
        return Tarif.prix((new Date() - hArr) / 60000)
    }
}