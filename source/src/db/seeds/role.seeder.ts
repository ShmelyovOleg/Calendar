import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Role } from 'src/roles/roles.model';

export default class RoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 0;');
    await dataSource.query('TRUNCATE TABLE `user_roles`;');
    await dataSource.query('TRUNCATE TABLE `role`;');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 1;');

    const repository = dataSource.getRepository(Role);
    await repository.insert([
      { value: 'Admin', description: 'Administrator role' },
      { value: 'User', description: 'Standard user role' },
    ]);
  }
}
