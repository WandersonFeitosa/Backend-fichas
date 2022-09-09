import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662709362759 implements MigrationInterface {
    name = 'default1662709362759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventarios" DROP CONSTRAINT "FK_ed22b8ac3cbdb254e2976faf0f0"`);
        await queryRunner.query(`ALTER TABLE "Inventarios" RENAME COLUMN "personagaem_id" TO "personagem_id"`);
        await queryRunner.query(`ALTER TABLE "Inventarios" ADD CONSTRAINT "FK_b0f88cd1431aefe07b65d88b229" FOREIGN KEY ("personagem_id") REFERENCES "Personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventarios" DROP CONSTRAINT "FK_b0f88cd1431aefe07b65d88b229"`);
        await queryRunner.query(`ALTER TABLE "Inventarios" RENAME COLUMN "personagem_id" TO "personagaem_id"`);
        await queryRunner.query(`ALTER TABLE "Inventarios" ADD CONSTRAINT "FK_ed22b8ac3cbdb254e2976faf0f0" FOREIGN KEY ("personagaem_id") REFERENCES "Personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
