import { AppDataSource } from "../data-source";
import { Ritual } from "../entities/Ritual";


export const rituaisReposiory = AppDataSource.getRepository(Ritual);
