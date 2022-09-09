import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { Personagaem } from "./Personagem";

@Entity("Inventarios")
export class Inventario {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: "text" })
  titulo: string;

  @Column({ type: "numeric" })
  capacidade: Number;

  @OneToOne(() => Personagaem, (personagem) => personagem.inventario)
  @JoinColumn({ name: "personagaem_id" })
  personagem: Personagaem;

  @ManyToMany(() => Item, (item) => item.inventarios)
  @JoinTable({
    name: "item_inventario",
    joinColumn: {
      name: "item_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "inventario_id",
      referencedColumnName: "id",
    },
  })
  itens: Item[];
}
