//import { Matiere } from "./matiere.js";

export class Eleve {
    constructor(nom,prenom) {
        this.nom = nom ;
        this.prenom = prenom ;
        this.matieres = {} ;
    }
    
    getNotesLst(matLst) {
        
        let ret = [];
        
        matLst.forEach( mat => { 
            
            if (this.matieres.hasOwnProperty(mat)) {
                
                this.matieres[mat].forEach( not => {
                    ret.push([this.nom,this.prenom,mat,not]) ;
                })
            }
            
            
        });
        
        return ret ;
    }
}