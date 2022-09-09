import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuarios";

export const usuarioReposiory = AppDataSource.getRepository(Usuario);
