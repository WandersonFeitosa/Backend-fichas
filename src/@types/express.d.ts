import { Usuario } from "../entities/Usuarios";

declare global {
  namespace Express {
    export interface Request {
      user: Partial<Usuario>;
    }
  }
}
