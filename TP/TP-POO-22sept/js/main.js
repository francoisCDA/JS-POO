import { Eleve } from "./class/Eleve.js";

let eleves = [] ;

// la saisie

const inNom = document.getElementById('inNom');
const inPrenom = document.getElementById('inPrenom');
const inMatiere = document.getElementById('inMatiere');
const inNote = document.getElementById('inNote');

const selectEleve = document.getElementById("selectEleve");
const selectMatiere = document.getElementById("selectMatiere");

const btnAddEleve = document.getElementById('btnAddEleve');
const btnAddMatiere = document.getElementById('btnAddMatiere');
const btnAddNote = document.getElementById('btnAddNote');


// les filtres 

const filtreEleve = document.getElementById('filtreEleve');
const filtreMatiere = document.getElementById('filtreMatiere');

// affichage

const affichMoyenne = document.getElementById('moyenne') ;
const affichTableau = document.getElementById('notes') ;




selectEleve.onchange = () => { 
   
    if (selectEleve.value > 0) {
        mkMatList(selectMatiere, selectEleve.value);
    } 
    selectMatiere.selectedIndex = 0 ;
}



btnAddEleve.onclick = () => {
     if (inNom.value && inPrenom.value) {
        eleves.push(new Eleve(inNom.value,inPrenom.value));
       
        let elList = eleves.map(eleve => `${eleve.nom}  ${eleve.prenom}`) ;
       
        mkSelectOption(selectEleve,elList,'un élève');
        mkSelectOption(filtreEleve,elList,'un élève');

    }
}


btnAddMatiere.onclick = () => {
    
    if (inMatiere.value) {
        if (selectEleve.value) {
            eleves[selectEleve.value].addMat(inMatiere.value);
            mkMatList(selectMatiere,selectEleve.value)
        } else {
            alert('Sélectionner un élève');
        }
    } else {
        alert("indiquer une matière");
    }
}


btnAddNote.onclick = () => {

    if (selectEleve.value && selectMatiere.value && inNote.value) {
        eleves[selectEleve.value].matieres[selectMatiere.value].notes.push(inNote.value);
        updAffichage();
    }
}



function mkMatList(parent,ind) {

        if (eleves[ind].matieres.length > 0) {
            let matList = eleves[ind].matieres.map(matiere => matiere.discipline) ;
            mkSelectOption(parent,matList,'une matière');
        }

}



function mkSelectOption(parent,table,label) {

    parent.innerHTML = '';
    let optDefault = document.createElement('option');
    optDefault.innerText = `--- Sélectionner ${label} ---` ;
    optDefault.value = -1;
        
    parent.appendChild(optDefault);

    for (let i = 0 ; i < table.length ; i++ ) {
        let opt = document.createElement('option');
        opt.value = i ;
        opt.innerText = table[i] ;

        parent.appendChild(opt);
    };
}


function printNotes(hightScore) {

    hightScore.forEach(table => {
        
        let newTd0 = document.createElement('td');
        newTd0.innerText = table[0];

        let newTd1 = document.createElement('td');
        newTd1.innerText = table[1];

        let newTd2 = document.createElement('td');
        newTd2.innerText = table[2];

        let newTd3 = document.createElement('td');
        newTd3.innerText = table[3];

        let newTr = document.createElement('tr');
        newTr.appendChild(newTd0);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);

        affichTableau.appendChild(newTr);
    });
}



function updAffichage() {

    if (filtreEleve.value == -1 ) {
        affichMoyenne.innerHTML = `` ;
        affichTableau.innerHTML = `` ;
        
        let tableEleve = [];

        for (let i = 0 ; i < eleves.length ; i++) {
            for (let j = 0 ; j < eleves[i].matieres.length ; j++ ) {
                for (let k = 0 ; k < eleves[i].matieres[j].notes.length ; k++ ) {
                    tableEleve.push([eleves[i].nom, eleves[i].prenom, eleves[i].matieres[j].discipline, eleves[i].matieres[j].notes[k]]);
                }
            }
        }

        console.table(tableEleve);
        
        printNotes(tableEleve);

    } else {

    console.log('var var1 = new Affichage');

    }

}



filtreEleve.onchange = () => { 

    if (filtreEleve.value > -1) {
        mkMatList(filtreMatiere, filtreEleve.value); 
    }
    filtreMatiere.selectedIndex = 0 ;

    updAffichage();

} 

filtreMatiere.onchange = () => {
    console.log('var var1 = new Any');

    updAffichage();

}
