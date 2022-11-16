"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poderesRepository = void 0;
const data_source_1 = require("../data-source");
const Poder_1 = require("../entities/Poder");
exports.poderesRepository = data_source_1.AppDataSource.getRepository(Poder_1.Poder);
