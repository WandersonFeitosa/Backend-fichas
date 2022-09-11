import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
import { personagensReposiory } from "../repositories/personagensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class MesasController {
  async create(req: Request, res: Response) {
    const { titulo } = req.body;

    const { idUsuario } = req.params;

    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(idUsuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      const newMesa = mesasReposiory.create({
        titulo,
        usuario,
      });

      await mesasReposiory.save(newMesa);

      return res.status(201).json(newMesa);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async listMesas(req: Request, res: Response) {
    const { idUsuario } = req.params;

    try {
      const mesas = await mesasReposiory.find({
        where: {
          usuario: {
            id: idUsuario,
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
    const { idMesa } = req.params;

    try {
      const personagens = await personagensReposiory.find({
        where: {
          mesa: {
            id: idMesa,
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
