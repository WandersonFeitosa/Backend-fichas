import { Request, Response } from "express";
import { inventariosReposiory } from "../repositories/inventariosRepository";
import { itensReposiory } from "../repositories/itensRepository";

export class InventariosController {
  async create(req: Request, res: Response) {
    const { forca } = req.body;

    var capacidade = forca * 5;

    try {
      const newInventario = inventariosReposiory.create({ capacidade });

      await inventariosReposiory.save(newInventario);
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
        return res.status(404).json({ message: "O inventarrio não existe" });
      }

      //VERIFICAR ITEM

      const item = await itensReposiory.findOneBy({ id: item_id });

      if (!item) {
        return res.status(404).json({ message: "O item não existe" });
      }

      const inventarioAdd = {
        ...inventario,
        itens: [item],
      };

      // VINCULAR ITEM
      await inventariosReposiory.save(inventarioAdd);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
