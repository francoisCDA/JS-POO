import { Vehicule } from "./vehicule.js";
import { Tarif } from "./tarifs.js";



export class Parking {
    constructor() {
        this.listVoiture = [] ;
    }

    knowCar(num) {          
        return this.listVoiture.findIndex((car) => car.plaque == num) ;
    }

    actualParkCar(num) {
        return this.listVoiture[this.knowCar(num)].heureArr == '' ? false : true ;
    }

    addCar(num) {
        this.listVoiture.push( new Vehicule(num) ) ;
        this.updateCar(num);
    }

    updateCar(num) {
        this.listVoiture[this.knowCar(num)].heureArrivee = new Date ;
    }

    archivCar(num) {
        this.listVoiture[this.knowCar(num)].archive() ;
    }

    aPayer(num) {
        let hArr = this.listVoiture[this.knowCar(num)].heureArrivee ;
        return Tarif.prix((new Date() - hArr) / 60000) ;
    }

    displayParking() {
        this.listVoiture.forEach((car) => car.displayHistorique())
    }
}