import { Router } from "express";
import { InventariosController } from "../controllers/InventariosController";
import { ItensController } from "../controllers/ItensController";
import { MesasController } from "../controllers/MesasController";
import { PersonagensController } from "../controllers/PersonagensController";
import { UsuariosController } from "../controllers/UsuariosController";

const routes = Router();

routes.post("/usuario", new UsuariosController().create);
routes.post("/mesa/:idUsuario", new MesasController().create);
routes.post("/personagem/:idUsuario", new PersonagensController().create);
routes.post("/vincularmesa/:idPersonagem", new PersonagensController().vincularMesa);
routes.post("/adicionarItem/:idInventario", new InventariosController().adicionarItem);
routes.post("/inventario", new InventariosController().create);
routes.post("/item", new ItensController().create);

export default routes;
