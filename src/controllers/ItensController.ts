import { Request, Response } from "express";
import { itensReposiory } from "../repositories/itensRepository";

export class ItensController {
  async create(req: Request, res: Response) {
    const { nome, crit, ameaca, dano_arma, categoria, tamanho, info } = req.body;
    try {
      const newItem = itensReposiory.create({
        nome,
        crit,
        ameaca,
        dano_arma,
        categoria,
        tamanho,
        info,
      });

      await itensReposiory.save(newItem);
      return res.status(201).json({ newItem });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
