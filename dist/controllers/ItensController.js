"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItensController = void 0;
const itensRepository_1 = require("../repositories/itensRepository");
const usuariosRepository_1 = require("../repositories/usuariosRepository");
class ItensController {
    async create(req, res) {
        const { nome, crit, ameaca, dano_arma, categoria, tamanho, info, dano_elemental, elemento_maldicao, id_usuario, } = req.body;
        try {
            const usuario = await usuariosRepository_1.usuarioReposiory.findOneBy({
                id: String(id_usuario),
            });
            if (!usuario) {
                return res.status(404).json({ message: "O usuário não existe" });
            }
            const newItem = itensRepository_1.itensReposiory.create({
                nome,
                crit,
                ameaca,
                dano_arma,
                categoria,
                tamanho,
                info,
                dano_elemental,
                elemento_maldicao,
                usuario,
            });
            await itensRepository_1.itensReposiory.save(newItem);
            return res.status(201).json({ message: "Item criado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async list(req, res) {
        const { id_usuario } = req.body;
        try {
            const itens = await itensRepository_1.itensReposiory.find({
                where: {
                    usuario: {
                        id: id_usuario,
                    },
                },
            });
            if (!itens) {
                return res.json("O usuário ainda não possui itens");
            }
            return res.json(itens);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.ItensController = ItensController;
