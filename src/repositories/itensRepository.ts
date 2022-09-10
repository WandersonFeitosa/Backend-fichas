import { AppDataSource } from "../data-source";
import { Item } from "../entities/Item";

export const itensReposiory = AppDataSource.getRepository(Item);
