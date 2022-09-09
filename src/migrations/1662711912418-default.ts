import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662711912418 implements MigrationInterface {
    name = 'default1662711912418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventarios" DROP COLUMN "titulo"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventarios" ADD "titulo" text NOT NULL`);
    }

}
