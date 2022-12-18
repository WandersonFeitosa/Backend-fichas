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
  nome: string;

  @Column({ type: "text" })
  origem: string;

  @Column({ type: "numeric" })
  nex: Number;

  @Column({ type: "text", nullable: true })
  classe: string;

  @Column({ type: "text", nullable: true })
  trilha: string;

  @Column({ type: "text", nullable: true })
  patente: string;

  @Column({ type: "numeric", nullable: true })
  idade: Number;

  @Column({ type: "text", nullable: true })
  afinidade: String;

  @Column({ type: "text", nullable: true })
  versatilidade: String;

  @Column("jsonb", { nullable: true })
  saude?: object;

  @Column("jsonb", { nullable: true })
  resistencias?: object;

  @Column("jsonb", { nullable: true })
  atributos?: object;

  @Column("jsonb", { nullable: true })
  pericias?: object;

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
