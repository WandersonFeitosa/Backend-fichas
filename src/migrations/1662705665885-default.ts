import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662705665885 implements MigrationInterface {
    name = 'default1662705665885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mesas" DROP COLUMN "id_personagens"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mesas" ADD "id_personagens" text array NOT NULL`);
    }

}
