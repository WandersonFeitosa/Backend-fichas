import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventario } from "./Inventario";
import { Mesa } from "./Mesa";
import { Usuario } from "./Usuarios";

interface Pericia {
  name: string;
  valor: number;
}

@Entity("Personagens")
export class Personagem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" , nullable: true})
  origin?: string;

  @Column({ type: "numeric" })
  nex: Number;

  @Column({ type: "text", nullable: true })
  classe: string;

  @Column({ type: "text", nullable: true })
  trail: string;

  @Column({ type: "text", nullable: true })
  rank: string;

  @Column({ type: "numeric", nullable: true })
  age: Number;

  @Column({ type: "text", nullable: true })
  afinity: String;

  @Column({ type: "text", nullable: true })
  versatility: String;

  @Column("jsonb", { nullable: true })
  stats?: object;

  @Column("jsonb", { nullable: true })
  resistances?: object;

  @Column("jsonb", { nullable: true })
  attributes?: object;

  @Column("jsonb", { nullable: true })
  skills?: object;

  @OneToOne(() => Inventario, (inventario) => inventario.personagem)
  @JoinColumn({ name: "invetario_id" })
  inventario: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.personagens)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @ManyToOne(() => Mesa, (mesa) => mesa.personagens)
  @JoinColumn({ name: "mesa_id" })
  mesa: Mesa;
}
