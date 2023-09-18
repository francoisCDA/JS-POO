export class Ihm {
    static getNumPlaque() {
        let np = document.querySelector('.saisieClient input');
        let ret = this.chkFormat(np.value) ;
        np.value = '';
        return ret ;
    }
    
    static affichMessage(text,bsColor) {
        let retClient = document.getElementById('retourClient');
        retClient.className = `bg-${bsColor} bg-opacity-50 text-${bsColor} text-center`;
        if (text) { retClient.innerHTML = `<pan>${text}<span>`; } ;
    }

    chkFormat(plaque) {
        //vérifier le format de la saisie
    }
}