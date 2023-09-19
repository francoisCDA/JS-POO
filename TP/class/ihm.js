export class Ihm {

    static getNumPlaque() {
       let inputNumPlaq = document.getElementById('immatriculation').value;
       if (Ihm.chkFormat(inputNumPlaq)) {
           return inputNumPlaq;
       } else {
        this.affichMessage(`Veuillez saisir un numéro de plaque valide`, 'danger');
       };
    }
    
    static affichMessage(text,bsColor) {
        let btns = document.querySelectorAll('.saisieClient button');
        btns.forEach(btn => btn.disabled = true );

        let retClient = document.getElementById('retourClient');

        retClient.className = `bg-${bsColor} bg-opacity-50 text-${bsColor} text-center`;
        if (text) { retClient.innerHTML = `<pan>${text}<span>`; } ;
        setTimeout(() => {
            document.getElementById('immatriculation').value ='';
            retClient.className = 'd-none';
            btns.forEach(element => element.disabled = false );

        }, 5000);
    }

    static chkFormat(plaque) {
        let rgex = /^[A-Z]{2}[-][0-9]{3}[-][A-Z]{2}$/i ;
        console.log(rgex.test(plaque));
        return rgex.test(plaque);
    }
}