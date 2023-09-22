import { Matiere } from "./Matiere.js";


export class Eleve {
    constructor(nom,prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.matieres = [] ;
    }

    addNote(matiere,note) {
        let ind = this.matiereKnow(matiere) ;
        if (ind > -1 ) {
            this.matieres[ind].notes.push(note);
        } else {
            this.matieres.push(new Matiere(matiere, note));
        }

    }

    matieresList() {
        return matieresList = this.matieres.map(matiere => matiere.label);
    }

    matiereKnow(matiere) {
        return this.matieresList().indexOf(matiere);
    }

    moyenne() {
        if (this.matieres.length > 0 ) {
            let initValue = 0;
            return this.matieres.reduce((somme, matiere) => somme + matiere.moyenne(), initValue) / this.matieres.length;
        } else {
            return 0 ;
        }
    }
}

