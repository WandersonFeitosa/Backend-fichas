import { Request, Response } from "express";
import { itensReposiory } from "../repositories/itensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class ItensController {
  async create(req: Request, res: Response) {
    const { nome, crit, ameaca, dano_arma, categoria, tamanho, info } =
      req.body;
    const { idUsuario } = req.params;
    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(idUsuario),
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
        usuario,
      });

      await itensReposiory.save(newItem);
      return res.status(201).json({ newItem });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async list(req: Request, res: Response) {
    const { idUsuario } = req.params;

    try {
      const itens = await itensReposiory.find({
       
        where: {
          usuario: {
            id: idUsuario,
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
