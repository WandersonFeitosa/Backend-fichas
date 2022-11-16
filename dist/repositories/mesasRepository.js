"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mesasReposiory = void 0;
const data_source_1 = require("../data-source");
const Mesa_1 = require("../entities/Mesa");
exports.mesasReposiory = data_source_1.AppDataSource.getRepository(Mesa_1.Mesa);
