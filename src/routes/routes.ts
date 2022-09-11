import { Router } from "express";
import { InventariosController } from "../controllers/InventariosController";
import { ItensController } from "../controllers/ItensController";
import { MesasController } from "../controllers/MesasController";
import { PersonagensController } from "../controllers/PersonagensController";
import { UsuariosController } from "../controllers/UsuariosController";
import { authMiddleware } from "../middlewares/authMiddleware";

const routes = Router();

//ROTAS DE USUARIO
routes.post("/usuario", new UsuariosController().create);
routes.post("/login", new UsuariosController().login);

routes.use(authMiddleware);

routes.get("/profile", new UsuariosController().getProfile);

//ROTAS DE MESA
routes.get("/mesa/:idUsuario", new MesasController().listMesas);
routes.get(
  "/listarPersonagens/:idMesa",
  new MesasController().listPersonagensMesa
);
routes.post("/mesa/:idUsuario", new MesasController().create);

//ROTAS DE PERSONGAEM
routes.get("/personagem/:idUsuario", new PersonagensController().list);
routes.post("/personagem/:idUsuario", new PersonagensController().create);
routes.patch(
  "/vincularMesa/:idPersonagem",
  new PersonagensController().vincularMesa
);

//ROTAS DE INVETARIO
routes.get("/inventario/:idPersonagem", new InventariosController().list);
routes.post("/inventario/:idPersonagem", new InventariosController().create);
routes.post(
  "/adicionarItem/:idInventario",
  new InventariosController().adicionarItem
);

//ROTAS DE ITEM
routes.get("/item/:idUsuario", new ItensController().list);
routes.post("/item/:idUsuario", new ItensController().create);

export default routes;
