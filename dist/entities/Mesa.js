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
exports.Mesa = void 0;
const typeorm_1 = require("typeorm");
const Personagem_1 = require("./Personagem");
const Usuarios_1 = require("./Usuarios");
let Mesa = class Mesa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Mesa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Mesa.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Personagem_1.Personagem, (personagem) => personagem.mesa),
    __metadata("design:type", Array)
], Mesa.prototype, "personagens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuario, (usuario) => usuario.mesas),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", Usuarios_1.Usuario)
], Mesa.prototype, "usuario", void 0);
Mesa = __decorate([
    (0, typeorm_1.Entity)("Mesas")
], Mesa);
exports.Mesa = Mesa;
