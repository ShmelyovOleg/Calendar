import { config } from 'dotenv';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Users } from 'src/users/users.model';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'mysql',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || 'dbuser',
  password: process.env.MYSQL_PASSWORD || 'K5S3akrFvC3jw',
  database: process.env.MYSQL_DATABASE || 'user_management',
  // entities: ['dist/**/*.model.js'],
  entities: [Users, Role, UserRoles],
  //   migrations: ['dist/db/migrations/*.js'],
  //   migrationsRun: process.env.NODE_ENV === 'development',

  seeds: ['dist/db/seeds/**/*.js'],
  //   factories: ['dist/db/factories/**/*.js'],
};

export default new DataSource(dataSourceOptions);
