import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("Mesas")
export class Mesa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  titulo: string;

  @Column({ type: "text" })
  personagens: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.mesas)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
