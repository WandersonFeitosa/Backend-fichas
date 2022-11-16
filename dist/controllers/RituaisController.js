"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RituaisController = void 0;
const rituaisRepository_1 = require("../repositories/rituaisRepository");
const usuariosRepository_1 = require("../repositories/usuariosRepository");
class RituaisController {
    async create(req, res) {
        //RECEBER DADOS DO RITUAL
        const { nome, execucao, alcance, alvo, duracao, funcoes, descricao, circulo, elemento, dano_elemental, resistencia, circulo_discente, funcoes_discente, resistencia_discente, circulo_verdadeiro, funcoes_verdadeiro, resistencia_verdadeiro, } = req.body;
        const { id_usuario } = req.body;
        try {
            //CHECAR USUARIO
            const usuario = await usuariosRepository_1.usuarioReposiory.findOneBy({
                id: String(id_usuario),
            });
            if (!usuario) {
                return res.status(404).json({ message: "O usuário não existe" });
            }
            const newRitual = rituaisRepository_1.rituaisReposiory.create({
                nome,
                execucao,
                alcance,
                alvo,
                duracao,
                funcoes,
                descricao,
                circulo,
                elemento,
                dano_elemental,
                resistencia,
                circulo_discente,
                funcoes_discente,
                resistencia_discente,
                circulo_verdadeiro,
                funcoes_verdadeiro,
                resistencia_verdadeiro,
                usuario,
            });
            await rituaisRepository_1.rituaisReposiory.save(newRitual);
            return res.status(201).json({ newRitual });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.RituaisController = RituaisController;
