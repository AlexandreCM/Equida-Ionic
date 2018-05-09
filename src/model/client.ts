import { Pays } from '../model/pays';

export class Client {
    public id: number;
    public titre: String;
    public nom: String;
    public prenom: String;
    public adresse: String;
    public codePst: String;
    public ville: String;
    public mail: String;
    public pays: Pays;
}
