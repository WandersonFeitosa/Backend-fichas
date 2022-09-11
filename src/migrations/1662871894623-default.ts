import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662871894623 implements MigrationInterface {
    name = 'default1662871894623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" DROP CONSTRAINT "FK_f7a678652ae55766ac192d30780"`);
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" ADD CONSTRAINT "FK_f7a678652ae55766ac192d30780" FOREIGN KEY ("inventariosId") REFERENCES "Inventarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" DROP CONSTRAINT "FK_f7a678652ae55766ac192d30780"`);
        await queryRunner.query(`ALTER TABLE "itens_inventarios_inventarios" ADD CONSTRAINT "FK_f7a678652ae55766ac192d30780" FOREIGN KEY ("inventariosId") REFERENCES "Inventarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
