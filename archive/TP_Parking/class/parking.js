import { Vehicule } from "./vehicule.js";
import { Tarif } from "./tarifs.js";


export class Parking {
    constructor() {
        this.listVoiture = [] ;
    }

    knowCar(num) {
        // for (let i = 0 ; i < this.listVoiture.length ; i++) {
        //     if (this.listVoiture[i].plaque == num) {
        //         return i;
        //     } ;
        // }
            
        return this.listVoiture.findIndex((car) => car.plaque == num) ;
    }

    parkCar(num) {
        return this.listVoiture[this.knowCar].heureArr == '' ? false : true ;
    }

    addCar(num) {
        this.listVoiture.push( new Vehicule(num) ) ;
        console.log(this.listVoiture) ;
    }

    updateCar(num) {
        this.listVoiture[this.knowCar(num)].heureArrivee(new Date) ;
    }

    archivCar(num) {
        this.listVoiture[this.knowCar(num)].archivCar() ;
        //this.listVoiture = this.listVoiture.filter((car) => car.plaque != num);
    }

    aPayer(num) {
        let hArr = this.listVoiture[this.knowCar(num)].heureArrivee ;
        return Tarif.prix((new Date() - hArr) / 60000) ;
    }

    displayParking() {
        this.listVoiture.forEach((car) => car.displayHistorique())
    }
}