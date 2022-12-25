import { Router } from "express";
import { InventariosController } from "../controllers/InventariosController";
import { ItensController } from "../controllers/ItensController";
import { MesasController } from "../controllers/MesasController";
import { PersonagensController } from "../controllers/PersonagensController";
import { PoderesController } from "../controllers/PoderesController";
import { RituaisController } from "../controllers/RituaisController";
import { UsuariosController } from "../controllers/UsuariosController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { headerMiddleware } from "../middlewares/headerMiddleware";

const routes = Router();

routes.use(headerMiddleware);

//ROTAS DE USUARIO
routes.post("/createUsuario", new UsuariosController().create);
routes.post("/login", new UsuariosController().login);

// routes.use(authMiddleware);

//ROTAS DE MESA
routes.get("/listMesa/:id_usuario", new MesasController().listMesas);
routes.get(
  "/listarPersonagensMesa/:id_mesa",
  new MesasController().listPersonagensMesa
);
routes.post("/createMesa", new MesasController().create);

//ROTAS DE PERSONGAEM
routes.get("/listPersonagem/:id_usuario", new PersonagensController().list);
routes.post("/createPersonagem", new PersonagensController().create);
routes.patch("/vincularMesa", new PersonagensController().vincularMesa);

//ROTAS DE INVETARIO
routes.get("/listInventario", new InventariosController().list);
routes.post("/createInventario", new InventariosController().create);
routes.post("/adicionarItem", new InventariosController().adicionarItem);

//ROTAS DE ITEM
routes.get("/listItem", new ItensController().list);
routes.post("/createItem", new ItensController().create);

//ROTAS DE RITUAL
routes.post("/createRitual", new RituaisController().create);

//ROTAS DE PODER
routes.post("/createPoder", new PoderesController().create);

export default routes;
