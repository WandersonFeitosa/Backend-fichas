"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventariosController = void 0;
const data_source_1 = require("../data-source");
const Inventario_1 = require("../entities/Inventario");
const inventariosRepository_1 = require("../repositories/inventariosRepository");
const itensRepository_1 = require("../repositories/itensRepository");
const personagensRepository_1 = require("../repositories/personagensRepository");
class InventariosController {
    async create(req, res) {
        const { id_personagem } = req.body;
        try {
            // VERIFICAR PERSONAGEM
            const personagem = await personagensRepository_1.personagensReposiory.findOneBy({
                id: String(id_personagem),
            });
            if (!personagem) {
                return res.status(404).json({ message: "O personagem não existe" });
            }
            var capacidade = Number(personagem.forca) * 5;
            if (capacidade < 5) {
                capacidade = 2;
            }
            const newInventario = inventariosRepository_1.inventariosReposiory.create({
                capacidade,
                personagem,
            });
            await inventariosRepository_1.inventariosReposiory.save(newInventario);
            await personagensRepository_1.personagensReposiory.update(id_personagem, {
                ...personagem,
                inventario: newInventario.id,
            });
            return res.status(201).json({ message: "Inventário criado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async adicionarItem(req, res) {
        const { id_item, id_inventario } = req.body;
        try {
            //VERIFICAR INVENTARIO
            const inventario = await inventariosRepository_1.inventariosReposiory.findOneBy({
                id: String(id_inventario),
            });
            if (!inventario) {
                return res.status(404).json({ message: "O inventario não existe" });
            }
            //VERIFICAR ITEM
            const item = await itensRepository_1.itensReposiory.findOneBy({ id: id_item });
            if (!item) {
                return res.status(404).json({ message: "O item não existe" });
            }
            await data_source_1.AppDataSource.createQueryBuilder()
                .relation(Inventario_1.Inventario, "itens")
                .of(inventario)
                .add(item);
            return res.json({ message: "item adicionado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async list(req, res) {
        const { id_personagem } = req.body;
        try {
            const inventario = await inventariosRepository_1.inventariosReposiory.find({
                relations: {
                    itens: true,
                },
                where: {
                    personagem: {
                        id: id_personagem,
                    },
                },
            });
            if (!inventario) {
                return res.json("O personagem ainda não possui inventário");
            }
            return res.json(inventario);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.InventariosController = InventariosController;
