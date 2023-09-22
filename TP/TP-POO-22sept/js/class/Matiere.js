export class Matiere {
    constructor(dis) {
        this.discipline = dis ;
        this.notes = [] ;
    }

    moyenne() {
        if (this.notes.length > 0 ) {
            let initValue = 0;
            return this.notes.reduce((somme, noteCourante) => somme + noteCourante, initValue) / this.notes.length;
        } else {
            return ' ' ;
        }
    }

}