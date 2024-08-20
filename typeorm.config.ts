const { DataSource } = require('typeorm');
const { Users } = require('./dist/src/users/users.model');
const { Role } = require('./dist/src/roles/roles.model');
const { UserRoles } = require('./dist/src/roles/user-roles.model');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.USER_NAME || 'root',
  password: process.env.DB_PASSWORD || 'K5S3akrFvC3jw',
  database: process.env.DB_NAME || 'user_management',
  entities: [Users, Role, UserRoles],
  migrations: ['dist/src/migrations/*.js'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
});

module.exports = AppDataSource;
