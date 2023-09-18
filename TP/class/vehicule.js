export class Vehicule {
    constructor(numPlaque) {
        this.plaque = numPlaque ;
        this.heureArrive = new Date() ;
    }

        dureeParkingMin(heureDepart){
            return((heureDepart - this.heureArrive) / 60000);
        }

}