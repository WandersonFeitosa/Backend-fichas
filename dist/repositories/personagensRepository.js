"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personagensReposiory = void 0;
const data_source_1 = require("../data-source");
const Personagem_1 = require("../entities/Personagem");
exports.personagensReposiory = data_source_1.AppDataSource.getRepository(Personagem_1.Personagem);
