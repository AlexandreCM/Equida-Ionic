import { CategVente } from '../model/categVente';
import { Lieu } from '../model/lieu';

export class Vente {
    public id: number;
    public nom: String;
    public dateDebut: Date;
    public categorie: CategVente;
    public lieu: Lieu;
}
