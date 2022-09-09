import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventario } from "./Inventario";

@Entity("Itens")
export class Item {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  modificadores: string;

  @Column({ type: "numeric" })
  crit: Number;

  @Column({ type: "numeric" })
  ameaca: Number;

  @Column({ type: "text" })
  dano_arma: string;

  @Column({ type: "text" })
  dano_modificadores: string;

  @Column({ type: "numeric" })
  categoria: Number;

  @Column({ type: "numeric" })
  tamanho: Number;

  @ManyToMany(() => Inventario, (inventario) => inventario.itens)
  inventarios: Inventario[];

  @Column({ type: "text" })
  info: string;
}
