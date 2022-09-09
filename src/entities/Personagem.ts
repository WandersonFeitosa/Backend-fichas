import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventario } from "./Inventario";
import { Usuario } from "./Usuarios";

@Entity("Personagens")
export class Persongaem {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  personagens: string;

  @Column({ type: "text" })
  origem: string;

  @Column({ type: "text" })
  nex: string;

  @Column({ type: "text" })
  classe: string;

  @Column({ type: "text" })
  trilha: string;

  @Column({ type: "text" })
  patente: string;

  @Column({ type: "numeric" })
  idade: Number;

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
  inventario: Inventario;

  @ManyToOne(() => Usuario, (usuario) => usuario.personagens)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
