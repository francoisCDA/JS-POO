import { Eleve } from "./eleve.js";


export class Ecole {
    constructor() {
        this.eleves = [] ;
        this.matieresLst = [] ;
    }

    inscription(nom, prenom){
        this.eleves.push(new Eleve(nom,prenom));
    } 
   
    getElevesNamesLst() {
        return this.eleves.map(eleve => `${eleve.nom}  ${eleve.prenom}`);
    }
    
    addMatiere(nom) {
        this.matieresLst.push(nom);
    }

    getMatiereLst() {
        return this.matieresLst ;
    }

    addNote(indEleve,idMatiere,note) { 
        if(!this.eleves[indEleve].matieres.hasOwnProperty(idMatiere)) {
            this.eleves[indEleve].matieres[idMatiere] = [] ;
        } 
        this.eleves[indEleve].matieres[idMatiere].push(note);
    } 



}