import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662695277921 implements MigrationInterface {
    name = 'default1662695277921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Inventarios" ("id" SERIAL NOT NULL, "titulo" text NOT NULL, "capacidade" numeric NOT NULL, "personagaem_id" integer, CONSTRAINT "REL_ed22b8ac3cbdb254e2976faf0f" UNIQUE ("personagaem_id"), CONSTRAINT "PK_6893dd7634b6bc4f6828f5c9459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Itens" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "modificadores" text NOT NULL, "crit" numeric NOT NULL, "ameaca" numeric NOT NULL, "dano_arma" text NOT NULL, "dano_modificadores" text NOT NULL, "categoria" numeric NOT NULL, "tamanho" numeric NOT NULL, "info" text NOT NULL, CONSTRAINT "PK_07e63f5dc5948ad236653cfb40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item_inventario" ("item_id" integer NOT NULL, "inventario_id" integer NOT NULL, CONSTRAINT "PK_ea23319d569349c5b9153bd21a6" PRIMARY KEY ("item_id", "inventario_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8907fe60a8aae929c297b2691f" ON "item_inventario" ("item_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_11cb4bc08ab10c4a9ef813fdce" ON "item_inventario" ("inventario_id") `);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "invetario_id" integer`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "UQ_465f2bb5c4b23137acb126076e6" UNIQUE ("invetario_id")`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "idade"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "idade" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pv_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pv_atual" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "ps_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "ps_atual" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pe_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pe_atual" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pv_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pv_max" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "ps_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "ps_max" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pe_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pe_max" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_fisica"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_fisica" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_balistica"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_balistica" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_sangue"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_sangue" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_morte"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_morte" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_energia"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_energia" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_conhecimento"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_conhecimento" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "forca"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "forca" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "agilidade"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "agilidade" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "inteligencia"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "inteligencia" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "presenca"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "presenca" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "vigor"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "vigor" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_465f2bb5c4b23137acb126076e6" FOREIGN KEY ("invetario_id") REFERENCES "Inventarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventarios" ADD CONSTRAINT "FK_ed22b8ac3cbdb254e2976faf0f0" FOREIGN KEY ("personagaem_id") REFERENCES "Personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_inventario" ADD CONSTRAINT "FK_8907fe60a8aae929c297b2691f2" FOREIGN KEY ("item_id") REFERENCES "Inventarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "item_inventario" ADD CONSTRAINT "FK_11cb4bc08ab10c4a9ef813fdce3" FOREIGN KEY ("inventario_id") REFERENCES "Itens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_inventario" DROP CONSTRAINT "FK_11cb4bc08ab10c4a9ef813fdce3"`);
        await queryRunner.query(`ALTER TABLE "item_inventario" DROP CONSTRAINT "FK_8907fe60a8aae929c297b2691f2"`);
        await queryRunner.query(`ALTER TABLE "Inventarios" DROP CONSTRAINT "FK_ed22b8ac3cbdb254e2976faf0f0"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_465f2bb5c4b23137acb126076e6"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "vigor"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "vigor" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "presenca"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "presenca" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "inteligencia"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "inteligencia" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "agilidade"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "agilidade" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "forca"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "forca" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_conhecimento"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_conhecimento" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_energia"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_energia" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_morte"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_morte" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_sangue"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_sangue" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_balistica"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_balistica" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "res_fisica"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "res_fisica" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pe_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pe_max" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "ps_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "ps_max" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pv_max"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pv_max" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pe_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pe_atual" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "ps_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "ps_atual" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "pv_atual"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "pv_atual" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "idade"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "idade" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "UQ_465f2bb5c4b23137acb126076e6"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "invetario_id"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_11cb4bc08ab10c4a9ef813fdce"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8907fe60a8aae929c297b2691f"`);
        await queryRunner.query(`DROP TABLE "item_inventario"`);
        await queryRunner.query(`DROP TABLE "Itens"`);
        await queryRunner.query(`DROP TABLE "Inventarios"`);
    }

}
