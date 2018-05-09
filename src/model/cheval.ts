import { TypeCheval } from '../model/typeCheval';

export class Cheval {
    public id: number;
    public nom: String;
    public sexe: String;
    public prix: number;
    public type: TypeCheval;
    public dateNaissance: Date;
}
