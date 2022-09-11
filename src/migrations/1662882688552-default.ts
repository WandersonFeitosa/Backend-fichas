import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662882688552 implements MigrationInterface {
    name = 'default1662882688552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuarios" ADD CONSTRAINT "UQ_8b023272b1d74a6e499d8c80834" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuarios" DROP CONSTRAINT "UQ_8b023272b1d74a6e499d8c80834"`);
    }

}
