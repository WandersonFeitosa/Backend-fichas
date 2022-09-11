import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Inventario } from "../entities/Inventario";
import { inventariosReposiory } from "../repositories/inventariosRepository";
import { itensReposiory } from "../repositories/itensRepository";
import { personagensReposiory } from "../repositories/personagensRepository";

export class InventariosController {
  async create(req: Request, res: Response) {
    const { idPersonagem } = req.params;

    try {
      // VERIFICAR PERSONAGEM
      const personagem = await personagensReposiory.findOneBy({
        id: String(idPersonagem),
      });

      if (!personagem) {
        return res.status(404).json({ message: "O personagem não existe" });
      }

      var capacidade = Number(personagem.forca) * 5;

      if (capacidade < 5) {
        capacidade = 2;
      }

      const newInventario = inventariosReposiory.create({
        capacidade,
        personagem,
      });
      await inventariosReposiory.save(newInventario);
      await personagensReposiory.update(idPersonagem, {
        ...personagem,
        inventario: newInventario.id,
      });

      return res.status(201).json({ newInventario });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async adicionarItem(req: Request, res: Response) {
    const { item_id } = req.body;
    const { idInventario } = req.params;

    try {
      //VERIFICAR INVENTARIO
      const inventario = await inventariosReposiory.findOneBy({
        id: String(idInventario),
      });

      if (!inventario) {
        return res.status(404).json({ message: "O inventario não existe" });
      }

      //VERIFICAR ITEM

      const item = await itensReposiory.findOneBy({ id: item_id });

      if (!item) {
        return res.status(404).json({ message: "O item não existe" });
      }

      await AppDataSource.createQueryBuilder()
        .relation(Inventario, "itens")
        .of(inventario)
        .add(item);

      return res.json({ message: "item adicionado com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async list(req: Request, res: Response) {
    const { idPersonagem } = req.params;

    try {
      const inventario = await inventariosReposiory.find({
        relations: {
          itens: true,
        },
        where: {
          personagem: {
            id: idPersonagem,
          },
        },
      });

      console.log(inventario);

      if (!inventario) {
        return res.json("O usuário ainda não possui mesas");
      }

      return res.json(inventario);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
