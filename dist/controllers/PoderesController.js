"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoderesController = void 0;
const poderesRepository_1 = require("../repositories/poderesRepository");
const usuariosRepository_1 = require("../repositories/usuariosRepository");
class PoderesController {
    async create(req, res) {
        const { nome, atividade, custo, duracao, funcoes, alvo, descricao, paranormal, afinidade, melhoramento, funcao_melhoramento, id_usuario } = req.body;
        try {
            //CHECAR USUARIO
            const usuario = await usuariosRepository_1.usuarioReposiory.findOneBy({
                id: String(id_usuario),
            });
            if (!usuario) {
                return res.status(404).json({ message: "O usuário não existe" });
            }
            const newPoder = poderesRepository_1.poderesRepository.create({
                nome,
                atividade,
                custo,
                duracao,
                funcoes,
                alvo,
                descricao,
                paranormal,
                afinidade,
                melhoramento,
                funcao_melhoramento,
                usuario,
            });
            await poderesRepository_1.poderesRepository.save(newPoder);
            return res.status(201).json({ newPoder });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.PoderesController = PoderesController;
