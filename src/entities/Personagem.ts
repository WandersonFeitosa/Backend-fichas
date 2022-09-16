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

  @Column({ type: "numeric" })
  pv_atual: Number;

  @Column({ type: "numeric" })
  ps_atual: Number;

  @Column({ type: "numeric" })
  pe_atual: Number;

  @Column({ type: "numeric" })
  pv_max: Number;

  @Column({ type: "numeric" })
  ps_max: Number;

  @Column({ type: "numeric" })
  pe_max: Number;

  @Column({ type: "numeric" })
  res_fisica: Number;

  @Column({ type: "numeric" })
  res_balistica: Number;

  @Column({ type: "numeric" })
  res_sangue: Number;

  @Column({ type: "numeric" })
  res_morte: Number;

  @Column({ type: "numeric" })
  res_energia: Number;

  @Column({ type: "numeric" })
  res_conhecimento: Number;

  @Column({ type: "numeric" })
  forca: Number;

  @Column({ type: "numeric" })
  agilidade: Number;

  @Column({ type: "numeric" })
  inteligencia: Number;

  @Column({ type: "numeric" })
  presenca: Number;

  @Column({ type: "numeric" })
  vigor: Number;

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
