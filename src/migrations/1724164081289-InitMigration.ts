import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1620491234567 implements MigrationInterface {
  name = 'InitMigration1620491234567';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE roles (
            id int PRIMARY KEY AUTO_INCREMENT,
            value varchar(255) UNIQUE NOT NULL,
            description varchar(255)
        )`);

    await queryRunner.query(`CREATE TABLE users (
            id int PRIMARY KEY AUTO_INCREMENT,
            username varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            position varchar(255),
            status varchar(255),
            createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            lastLogin timestamp
        )`);

    await queryRunner.query(`CREATE TABLE user_roles (
            id int PRIMARY KEY AUTO_INCREMENT,
            userId int,
            roleId int,
            FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (roleId) REFERENCES roles(id) ON DELETE CASCADE
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE user_roles`);
    await queryRunner.query(`DROP TABLE users`);
    await queryRunner.query(`DROP TABLE roles`);
  }
}
