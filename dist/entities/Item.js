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
exports.Item = void 0;
const typeorm_1 = require("typeorm");
const Inventario_1 = require("./Inventario");
const Usuarios_1 = require("./Usuarios");
let Item = class Item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Item.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "crit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "ameaca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "dano_arma", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Item.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "tamanho", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "dano_elemental", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "elemento_maldicao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuario, (usuario) => usuario.itens),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", Usuarios_1.Usuario)
], Item.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Inventario_1.Inventario, (inventario) => inventario.itens),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Item.prototype, "inventarios", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)("Itens")
], Item);
exports.Item = Item;
