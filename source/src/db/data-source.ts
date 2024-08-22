import { config } from 'dotenv';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Users } from 'src/users/users.model';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  //   entities: ['dist/resources/**/*.entity.js'],
  entities: [Users, Role, UserRoles],
  //   migrations: ['dist/db/migrations/*.js'],
  //   migrationsRun: process.env.NODE_ENV === 'development',

  seeds: ['dist/db/seeds/**/*.js'],
  //   factories: ['dist/db/factories/**/*.js'],
};

export default new DataSource(dataSourceOptions);
