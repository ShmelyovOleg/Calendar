import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Users } from 'src/users/users.model';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Users);
    await repository.insert([
      {
        username: 'name',
        email: 'email',
        password: 'pass',
      },
    ]);

    // ---------------------------------------------------

    // const userFactory = factoryManager.get(Users);
    // // save 1 factory generated entity, to the database
    // await userFactory.save();

    // // save 5 factory generated entities, to the database
    // await userFactory.saveMany(5);
  }
}
