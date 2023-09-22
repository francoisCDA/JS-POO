import { Ecole } from "./class/ecole.js";

let ecole = new Ecole() ;



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
const affichTableau = document.getElementById('tableauAffichage') ;


//update les options des select


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


// update le tableau




// nouvel élève

btnAddEleve.onclick = () => {
    if (inNom.value && inPrenom.value ) {

       ecole.inscription(inNom.value,inPrenom.value) ;
             
       mkSelectOption(selectEleve,ecole.getElevesNamesLst(),'un élève');
       mkSelectOption(filtreEleve,ecole.getElevesNamesLst(),'un élève');

   }
}


//nouvelle matière

btnAddMatiere.onclick = () => {
    
    if (inMatiere.value) {
        ecole.addMatiere(inMatiere.value);

        mkSelectOption(selectMatiere,ecole.getMatiereLst(),"une matière");
        mkSelectOption(filtreMatiere,ecole.getMatiereLst(),"une matière");

    } else {
        alert("indiquer une matière");
    }
}




//nouvelle note

btnAddNote.onclick = () => {

    if (selectEleve.value > -1 && selectMatiere.value > -1 && inNote.value) {
        ecole.addNote(selectEleve.value,ecole.matieresLst[selectMatiere.value],inNote.value)
        updAffichage();
    }
}


// affichage 

function printMoyenne(moy) {
    moy = Math.round(moy*10)/10 ;
    if (!isNaN(moy)) {
        affichMoyenne.innerHTML =  `<p>La moyenne ${filtreMatiere.value != -1 ? ecole.matieresLst[filtreMatiere.value] : "générale" } de${filtreEleve.value != -1 ? " " + ecole.eleves[filtreEleve.value].prenom + " " + ecole.eleves[filtreEleve.value].nom : "s élèves" } est de ${moy}/20 </p>`  ;
    } else {
        affichMoyenne.innerHTML =  ``;
    }
}


function printNotes(eles) {
    affichTableau.innerHTML = '' ;
    let somme = 0 ;
    let cmpt = 0;

    eles.forEach(ele => {

        ele.forEach(table => {
             
            let newTd0 = document.createElement('td');
            newTd0.innerText = table[0];
     
            let newTd1 = document.createElement('td');
            newTd1.innerText = table[1];
     
            let newTd2 = document.createElement('td');
            newTd2.innerText = table[2];
     
            let newTd3 = document.createElement('td');
            newTd3.innerText = table[3];
            somme += table[3];
            cmpt++ ;
     
            let newTr = document.createElement('tr');
            newTr.appendChild(newTd0);
            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            newTr.appendChild(newTd3);
     
             affichTableau.appendChild(newTr);
         });
        

    })

    printMoyenne(somme/cmpt);

}


function updAffichage() {

    let elevesLst = ecole.eleves ;
    let matLst = ecole.matieresLst ;

    if (filtreEleve.value > -1) {
        elevesLst = [elevesLst[filtreEleve.value]];
    }

    if (filtreMatiere.value > -1) {
        matLst = [matLst[filtreMatiere.value]];
    }
    

    let notesLst = [] ;

    elevesLst.forEach( eleve => {
        notesLst.push(eleve.getNotesLst(matLst));
    })

    console.dir(ecole);

    printNotes(notesLst);

}



filtreEleve.onchange = () => {
    updAffichage();
}

filtreMatiere.onchange = () => {
    updAffichage();
}






//initialiser le tableau

function initEcole(nb) {
    ecole.inscription("Jean", "Jacques");
    ecole.inscription("Yves", "Gandhi");
    ecole.inscription("Watson", "John");
    ecole.inscription("Cheng", "San");
    ecole.inscription("Alice", "Lefevre");
    ecole.inscription("Robert", "Martin");
    ecole.inscription("Sophie", "Leroux");
    ecole.inscription("David", "Gagnon");
    ecole.inscription("Marie", "Dubois");
    ecole.inscription("Pierre", "Lemoine");  
    ecole.inscription("Luc", "Bernard");
    ecole.inscription("Camille", "Rousseau");
    ecole.inscription("Paul", "Lefevre");
    ecole.inscription("Nathalie", "Tremblay");
    ecole.inscription("Isabelle", "Deschamps");
    ecole.addMatiere("Francais");
    ecole.addMatiere("Mathematiques");
    ecole.addMatiere("HTML");
    ecole.addMatiere("Poney");
    ecole.addMatiere("JS-only-VAR-declaration");

    for (let i = 0; i < nb; i++) {  
        let indEl = Math.floor(Math.random()*ecole.eleves.length);
        let mat = ecole.matieresLst[Math.floor(Math.random()*ecole.matieresLst.length)];
        let not = Math.round(Math.random()*200)/10 ;
    
        ecole.addNote(indEl,mat,not);
    }

    mkSelectOption(selectMatiere,ecole.getMatiereLst(),"une matière");
    mkSelectOption(filtreMatiere,ecole.getMatiereLst(),"une matière");
    mkSelectOption(selectEleve,ecole.getElevesNamesLst(),'un élève');
    mkSelectOption(filtreEleve,ecole.getElevesNamesLst(),'un élève');

    updAffichage() 
}

initEcole(50); // crée des élèves des matières et génére aléatoirement le nombre de notes demandés

