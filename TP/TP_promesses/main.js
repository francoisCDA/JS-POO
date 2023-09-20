const pokeUrl = num => `https://pokeapi.co/api/v2/pokemon/${num}` ;

const pokeDex = [] ;

function randPoke() {
    return Math.round(Math.random()*1009) + 1 ;
}

function importPoke(nb) {
    for (i = 0 ; i < nb ; i++ ) {

        let pokemon = ([urlImg,nom,taille,poids]) => ({urlImg,nom,taille,poids});

        fetch(pokeUrl(randPoke()))
            .then (response => {
                if(!response.ok) {
                    throw new Error(`Pokemon non trouvé`) ;
                }
                return response.json();
            })
            .then(data => {            
                let poke = [data.sprites.front_default,data.name,data.height,data.weight];
                pokeDex.push(pokemon(poke));
            })
            .catch(error => {
                console.log("PROBLEME",error);        
            })
    } 
}

importPoke(10);

console.log(pokeDex);

const pokeCard = document.getElementById("affichePoke");
const pokeInfos = document.querySelectorAll('.pokeInfo');

let ind = 0 ;

function nextPoke(nI) {
    ind += nI ;
    ind = ind < 0 ? pokeDex.length-1 : ind >= pokeDex.length ? 0 : ind ;
    infoPoke(ind);
}

function infoPoke(i = 0) {
    console.log(pokeDex.length);
    pokeInfos[0].src = pokeDex[i].urlImg;
    pokeInfos[1].textContent = `Nom : ${pokeDex[i].nom}`;
    pokeInfos[2].textContent = `Taille : ${pokeDex[i].taille}`;
    pokeInfos[3].textContent = `Poids : ${pokeDex[i].poids}`;
}

setTimeout(infoPoke, 500 );