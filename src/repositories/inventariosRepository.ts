import { AppDataSource } from "../data-source";
import { Inventario } from "../entities/Inventario";

export const inventariosReposiory = AppDataSource.getRepository(Inventario);
