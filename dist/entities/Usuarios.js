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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const Item_1 = require("./Item");
const Mesa_1 = require("./Mesa");
const Personagem_1 = require("./Personagem");
const Poder_1 = require("./Poder");
const Ritual_1 = require("./Ritual");
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mesa_1.Mesa, (mesa) => mesa.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "mesas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Personagem_1.Personagem, (personagem) => personagem.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "personagens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Item_1.Item, (item) => item.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "itens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ritual_1.Ritual, (ritual) => ritual.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "rituais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Poder_1.Poder, (poder) => poder.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "poderes", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)("Usuarios")
], Usuario);
exports.Usuario = Usuario;
