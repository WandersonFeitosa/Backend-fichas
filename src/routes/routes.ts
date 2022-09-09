import { Router } from "express";
import { MesasController } from "../controllers/MesasController";
import { UsuariosController } from "../controllers/UsuariosController";

const routes = Router();

routes.post("/usuario", new UsuariosController().create);
routes.post("/mesas", new MesasController().create);

export default routes;
