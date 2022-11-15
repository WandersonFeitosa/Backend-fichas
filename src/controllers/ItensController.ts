import { Request, Response } from "express";
import { itensReposiory } from "../repositories/itensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class ItensController {
  async create(req: Request, res: Response) {
    const {
      nome,
      crit,
      ameaca,
      dano_arma,
      categoria,
      tamanho,
      info,
      dano_elemental,
      elemento_maldicao,
      id_usuario,
      
    } = req.body;

    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(id_usuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }
      const newItem = itensReposiory.create({
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

      await itensReposiory.save(newItem);
      return res.status(201).json({ message: "Item criado com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async list(req: Request, res: Response) {
    const { id_usuario } = req.body;

    try {
      const itens = await itensReposiory.find({
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
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
