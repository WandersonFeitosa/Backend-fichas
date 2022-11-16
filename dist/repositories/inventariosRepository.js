"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventariosReposiory = void 0;
const data_source_1 = require("../data-source");
const Inventario_1 = require("../entities/Inventario");
exports.inventariosReposiory = data_source_1.AppDataSource.getRepository(Inventario_1.Inventario);
