"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesasController = void 0;
const mesasRepository_1 = require("../repositories/mesasRepository");
const personagensRepository_1 = require("../repositories/personagensRepository");
const usuariosRepository_1 = require("../repositories/usuariosRepository");
class MesasController {
    async create(req, res) {
        const { titulo, id_usuario } = req.body;
        try {
            const usuario = await usuariosRepository_1.usuarioReposiory.findOneBy({
                id: String(id_usuario),
            });
            if (!usuario) {
                return res.status(404).json({ message: "O usuário não existe" });
            }
            const newMesa = mesasRepository_1.mesasReposiory.create({
                titulo,
                usuario,
            });
            await mesasRepository_1.mesasReposiory.save(newMesa);
            return res.status(201).json({ message: "Mesa criada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async listMesas(req, res) {
        const { id_usuario } = req.body;
        try {
            const mesas = await mesasRepository_1.mesasReposiory.find({
                where: {
                    usuario: {
                        id: id_usuario,
                    },
                },
            });
            if (!mesas) {
                return res.json("O usuário ainda não possui mesas");
            }
            return res.json(mesas);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async listPersonagensMesa(req, res) {
        const { id_usuario } = req.body;
        try {
            const personagens = await personagensRepository_1.personagensReposiory.find({
                where: {
                    mesa: {
                        id: id_usuario,
                    },
                },
            });
            if (!personagens) {
                return res.json({ message: "Essa mesa não possui personagens" });
            }
            return res.json(personagens);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.MesasController = MesasController;
