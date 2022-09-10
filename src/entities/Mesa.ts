import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Personagem } from "./Personagem";

import { Usuario } from "./Usuarios";

@Entity("Mesas")
export class Mesa {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  titulo: string;

  @OneToMany(() => Personagem, (personagem) => personagem.mesa)
  personagens: Personagem[];

  @ManyToOne(() => Usuario, (usuario) => usuario.mesas)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
