"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioReposiory = void 0;
const data_source_1 = require("../data-source");
const Usuarios_1 = require("../entities/Usuarios");
exports.usuarioReposiory = data_source_1.AppDataSource.getRepository(Usuarios_1.Usuario);
