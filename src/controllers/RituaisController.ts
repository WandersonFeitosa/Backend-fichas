import { Request, Response } from "express";
import { rituaisReposiory } from "../repositories/rituaisRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class RituaisController {
  async create(req: Request, res: Response) {
    //RECEBER DADOS DO RITUAL
    const {
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
    
    } = req.body;

    const { idUsuario } = req.params;
    try {
      //CHECAR USUARIO
      const usuario = await usuarioReposiory.findOneBy({
        id: String(idUsuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      const newRitual = rituaisReposiory.create({
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

      await rituaisReposiory.save(newRitual);
      return res.status(201).json({ newRitual });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
