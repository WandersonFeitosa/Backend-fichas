import { AppDataSource } from "../data-source";
import { Personagem } from "../entities/Personagem";

export const personagensReposiory = AppDataSource.getRepository(Personagem);
