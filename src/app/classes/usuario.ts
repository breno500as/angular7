import { Telefone } from './telefone';

export class Usuario {
    id: number;
    email: string;
    telefone: Telefone = new Telefone();
    senha: string;
    codigoAtivacao: string;
}
