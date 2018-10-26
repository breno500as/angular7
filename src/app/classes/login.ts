import { Usuario } from './usuario';
import { TipoAcesso } from '@app/enum/tipoAcesso';

export class Login {
    usuario: Usuario = new Usuario();
    tipoAcesso: TipoAcesso = TipoAcesso.EMAIL;
}
