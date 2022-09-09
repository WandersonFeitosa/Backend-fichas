import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662698764768 implements MigrationInterface {
    name = 'default1662698764768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mesas" RENAME COLUMN "personagens" TO "id_personagens"`);
        await queryRunner.query(`ALTER TABLE "Mesas" DROP COLUMN "id_personagens"`);
        await queryRunner.query(`ALTER TABLE "Mesas" ADD "id_personagens" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mesas" DROP COLUMN "id_personagens"`);
        await queryRunner.query(`ALTER TABLE "Mesas" ADD "id_personagens" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Mesas" RENAME COLUMN "id_personagens" TO "personagens"`);
    }

}
