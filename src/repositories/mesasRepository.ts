import { AppDataSource } from "../data-source";
import { Mesa } from "../entities/Mesa";

export const mesasReposiory = AppDataSource.getRepository(Mesa);
