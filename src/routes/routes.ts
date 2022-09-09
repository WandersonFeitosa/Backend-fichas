import { Router } from "express";
import { MesasController } from "../controllers/MesasController";
import { PersonagensController } from "../controllers/PersonagensController";
import { UsuariosController } from "../controllers/UsuariosController";

const routes = Router();

routes.post("/usuario", new UsuariosController().create);
routes.post("/mesa", new MesasController().create);
routes.post("/personagem", new PersonagensController().create);

export default routes;
