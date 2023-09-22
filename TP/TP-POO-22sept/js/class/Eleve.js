import { Matiere } from "./Matiere.js";


export class Eleve {
    constructor(nom,prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.matieres = [] ;
    }

    addMat(nom) {
        this.matieres.push(new Matiere(nom));
    }

    matieresList() {
        return matieresList = this.matieres.map(matiere => matiere.label);
    }

    matiereKnow(matiere) {
        return this.matieresList().indexOf(matiere);
    }

    moyenne() {
        if (this.matieres.length > 0 ) {
            let somme = 0 ;

            this.matieres.forEach( matiere => {
                if (typeof matiere.moyenne() == 'number') {
                    somme += matiere.moyenne ;
                }
            })
            
            return this.matieres.reduce((somme, matiere) => somme + matiere.moyenne(), initValue) / this.matieres.length;
        } else {
            return ' ' ;
        }
    }
}

