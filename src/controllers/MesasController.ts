import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
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
        usuario
      });

      await mesasReposiory.save(newMesa);

      return res.status(201).json(newMesa);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
