"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const typeorm_1 = require("typeorm");
const Item_1 = require("./Item");
const Personagem_1 = require("./Personagem");
let Inventario = class Inventario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Inventario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Inventario.prototype, "capacidade", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Personagem_1.Personagem, (personagem) => personagem.inventario),
    (0, typeorm_1.JoinColumn)({ name: "personagem_id" }),
    __metadata("design:type", Personagem_1.Personagem)
], Inventario.prototype, "personagem", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Item_1.Item, (item) => item.inventarios),
    __metadata("design:type", Array)
], Inventario.prototype, "itens", void 0);
Inventario = __decorate([
    (0, typeorm_1.Entity)("Inventarios")
], Inventario);
exports.Inventario = Inventario;
