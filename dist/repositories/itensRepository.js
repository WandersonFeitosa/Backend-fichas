"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itensReposiory = void 0;
const data_source_1 = require("../data-source");
const Item_1 = require("../entities/Item");
exports.itensReposiory = data_source_1.AppDataSource.getRepository(Item_1.Item);
