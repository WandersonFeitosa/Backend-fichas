import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662871317630 implements MigrationInterface {
    name = 'default1662871317630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens_inventarios_inventarios" ("itensId" uuid NOT NULL, "inventariosId" uuid NOT NULL, CONSTRAINT "PK_8007a597580ef0fe96be11ef18c" PRIMARY KEY ("itensId", "inventariosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dd61a9d6e8474bf2dbb77eb9a9" ON "itens_inventarios_inventarios" ("itensId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f7a678652ae55766ac192d3078" ON "itens_inventarios_inventarios" ("inventariosId") `);
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" ADD CONSTRAINT "FK_dd61a9d6e8474bf2dbb77eb9a94" FOREIGN KEY ("itensId") REFERENCES "Itens"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" ADD CONSTRAINT "FK_f7a678652ae55766ac192d30780" FOREIGN KEY ("inventariosId") REFERENCES "Inventarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" DROP CONSTRAINT "FK_f7a678652ae55766ac192d30780"`);
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" DROP CONSTRAINT "FK_dd61a9d6e8474bf2dbb77eb9a94"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f7a678652ae55766ac192d3078"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dd61a9d6e8474bf2dbb77eb9a9"`);
        await queryRunner.query(`DROP TABLE "itens_inventarios_inventarios"`);
    }

}
