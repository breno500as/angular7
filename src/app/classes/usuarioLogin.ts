import { Usuario } from './usuario';
import { TipoAcesso } from '@app/enum/tipoAcesso';

export class UsuarioLogin {
    usuario: Usuario = new Usuario();
    tipoAcesso: TipoAcesso;
}
