import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventario } from "./Inventario";

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

  @ManyToMany(() => Inventario, (inventario) => inventario.itens)
  inventarios: Inventario[];
}
