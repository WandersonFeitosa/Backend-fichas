import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventario } from "./Inventario";
import { Usuario } from "./Usuarios";

@Entity("Itens")
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "numeric", nullable: true })
  crit: Number;

  @Column({ type: "numeric", nullable: true })
  ameaca: Number;

  @Column({ type: "text", nullable: true })
  dano_arma: string;

  @Column({ type: "numeric" })
  categoria: Number;

  @Column({ type: "numeric", nullable: true })
  tamanho: Number;

  @Column({ type: "text", nullable: true })
  info: string;

  @Column({ type: "text", nullable: true })
  dano_elemental: string;

  @Column({ type: "text", nullable: true })
  elemento_maldicao: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.itens)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @ManyToMany(() => Inventario, (inventario) => inventario.itens )
  @JoinTable()
  inventarios: Inventario[];
}
