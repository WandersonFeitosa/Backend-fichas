import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662705590997 implements MigrationInterface {
    name = 'default1662705590997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "mesa_id" integer`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_de007fe84bd284005a94c237961" FOREIGN KEY ("mesa_id") REFERENCES "Mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_de007fe84bd284005a94c237961"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "mesa_id"`);
    }

}
