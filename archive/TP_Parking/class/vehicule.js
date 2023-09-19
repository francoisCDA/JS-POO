export class Vehicule {
    constructor(numPlaque) {
        this.plaque = numPlaque ;
        this.heureArr = '' ;
        this.historique = [] ;
    }
    
    set heureArrivee(date) { this.heureArr = date }

    archive() {
        this.historique.push( {
            dateIn : this.heureArr ,
            dateOut : new Date()
        })
        this.heureArr = '' ;
    }

    displayHistorique() {
        console.log(`historique du véhicule immatriculé ${this.plaque}`);
        this.historique.forEach( (date) => console.log(`arrivé le ${date.dateIn}, départ le ${date.dateOut}`) );
        if ( this.HeureArr == '' ) {
            console.log(`le véhicule n'est actuellement pas garé dans le parking`)
        } else {
            console.log(`le véhicule est garé dans le parking depuis le ${this.heureArr}`)
        }
    }
}