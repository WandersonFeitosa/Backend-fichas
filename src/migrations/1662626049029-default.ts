import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662626049029 implements MigrationInterface {
    name = 'default1662626049029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Personagens" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "personagens" text NOT NULL, "origem" text NOT NULL, "nex" text NOT NULL, "classe" text NOT NULL, "trilha" text NOT NULL, "patente" text NOT NULL, "pv_atual" text NOT NULL, "ps_atual" text NOT NULL, "pe_atual" text NOT NULL, "pv_max" text NOT NULL, "ps_max" text NOT NULL, "pe_max" text NOT NULL, "res_fisica" text NOT NULL, "res_balistica" text NOT NULL, "res_sangue" text NOT NULL, "res_morte" text NOT NULL, "res_energia" text NOT NULL, "res_conhecimento" text NOT NULL, "forca" text NOT NULL, "agilidade" text NOT NULL, "inteligencia" text NOT NULL, "presenca" text NOT NULL, "vigor" text NOT NULL, "usuario_id" integer, CONSTRAINT "PK_a4448bd52099163e4823673fefa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_7d045545199e5dc743829df5221" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_7d045545199e5dc743829df5221"`);
        await queryRunner.query(`DROP TABLE "Personagens"`);
    }

}
