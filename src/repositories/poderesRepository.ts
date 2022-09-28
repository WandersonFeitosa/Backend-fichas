import { AppDataSource } from "../data-source";
import { Poder } from "../entities/Poder";

export const poderesRepository = AppDataSource.getRepository(Poder);
