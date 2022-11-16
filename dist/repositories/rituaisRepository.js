"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rituaisReposiory = void 0;
const data_source_1 = require("../data-source");
const Ritual_1 = require("../entities/Ritual");
exports.rituaisReposiory = data_source_1.AppDataSource.getRepository(Ritual_1.Ritual);
