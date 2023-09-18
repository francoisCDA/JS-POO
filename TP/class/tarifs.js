export class Tarif {
    static prix(duree) {
        switch (true) {
            case duree <= 15 :
                return 0.8;
            case duree > 15 && duree <= 30 :
                return 1.30;               

        }
        
    }
}