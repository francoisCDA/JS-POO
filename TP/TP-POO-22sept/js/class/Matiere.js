export class Matiere {
    constructor(nom,firstNote) {
        this.label = nom ;
        this.notes = [firstNote] ;
    }

    moyenne() {
        if (this.notes.length > 0 ) {
            let initValue = 0;
            return this.notes.reduce((somme, noteCourante) => somme + noteCourante, initValue) / this.notes.length;
        } else {
            return 0 ;
        }
    }

}