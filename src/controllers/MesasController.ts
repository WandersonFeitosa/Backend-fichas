import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
import { personagensReposiory } from "../repositories/personagensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class MesasController {
  async create(req: Request, res: Response) {
    const { titulo, id_usuario } = req.body;

    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(id_usuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      const newMesa = mesasReposiory.create({
        titulo,
        usuario,
      });

      await mesasReposiory.save(newMesa);

      return res.status(201).json({ message: "Mesa criada com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async listMesas(req: Request, res: Response) {
    const { id_usuario } = req.body;
    try {
      const mesas = await mesasReposiory.find({
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
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async listPersonagensMesa(req: Request, res: Response) {
    const { id_usuario } = req.body;

    try {
      const personagens = await personagensReposiory.find({
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
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
