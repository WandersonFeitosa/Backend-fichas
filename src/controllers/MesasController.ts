import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";

export class MesasController {
  async create(req: Request, res: Response) {
    const { titulo } = req.body;

    try {
      const newMesa = mesasReposiory.create({ titulo });

      await mesasReposiory.save(newMesa);
      return res.status(201).json({ newMesa });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
