import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";

export class MesasController {
  async create(req: Request, res: Response) {
    const { titulo, id_personagens } = req.body;

    try {
      const newMesa = mesasReposiory.create({
        titulo,
        id_personagens,
      });

      await mesasReposiory.save(newMesa);
      return res.status(201).json({ newMesa });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
