import { Eleve } from "./class/Eleve.js";

let eleves = [] ;

// la saisie

let inNom = document.getElementById('inNom');
let inPrenom = document.getElementById('inPrenom');
let inMatiere = document.getElementById('inMatiere');
let inNote = document.getElementById('inNote');

let selectEleve = document.getElementById("selectEleve");
let selectMatiere = document.getElementById("selectMatiere");

let btnAddEleve = document.getElementById('btnAddEleve');
let btnAddMatiere = document.getElementById('btnAddMatiere');
let btnAddNote = document.getElementById('btnAddNote');


btnAddEleve.onclick = () => {
     if (inNom.value && inPrenom.value) {
        eleves.push(new Eleve(inNom.value,inPrenom.value));
        console.log(eleves);

        let elList = eleves.map(eleve => `${eleve.nom}  ${eleve.prenom}`) ;
        
        mkSelectOption(selectEleve,elList);

     }
}


btnAddMatiere.onclick = () => {
    if (inMatiere.value) {
        let nomprenom = eleves.map(eleve => `${eleve.nom}${eleve.prenom}`);
        let ind = nomprenom.indexOf(`${inNom.value}${inPrenom.value}` );

        if (ind > 0 ) {
            eleves[ind].matieres.push(inMatiere.value);
        } else {
            alert('Sélectionner un élève');
        }
        console.dir(eleves);
    }
}


btnAddNote.onclick = () => {
    if (selectEleve > -1 && selectMatiere > -1 && inNote) {
        eleves[selectEleve.value].matieres[selectMatiere.value].push(inNote.value);
    }
}





function mkSelectOption(parent,table) {
    parent.innerHtml = '';
    for (i = 0 ; i < table.length ; i++ ) {
        let opt = document.createElement('option');
        opt.value = i ;
        opt.innerText= table[i] ;

        parent.appendChild(opt);
    };


}