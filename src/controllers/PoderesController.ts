import { Request, Response } from "express";
import { poderesRepository } from "../repositories/poderesRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class PoderesController {
  async create(req: Request, res: Response) {
    const {
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
      id_usuario
    } = req.body;

    try {
      //CHECAR USUARIO
      const usuario = await usuarioReposiory.findOneBy({
        id: String(id_usuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      const newPoder = poderesRepository.create({
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

      await poderesRepository.save(newPoder);
      return res.status(201).json({ newPoder });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
