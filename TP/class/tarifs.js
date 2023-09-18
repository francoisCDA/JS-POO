export class Tarif {
    static prix(duree) {
        switch (true) {
            case duree <= 15 :
                return 0.8;
            case duree <= 30 :
                return 1.30;
            case duree <= 45 :
                return 1.70 ;
            default :
            return 6;              
        }        
    }
}