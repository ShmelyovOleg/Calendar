// import { Seeder, SeederFactoryManager } from 'typeorm-extension';
// import { DataSource } from 'typeorm';
// import { Users } from 'src/users/users.model';

// export default class UserSeeder implements Seeder {
//   public async run(
//     dataSource: DataSource,
//     factoryManager: SeederFactoryManager
//   ): Promise<any> {
//     await dataSource.query('TRUNCATE TABLE `users`;');

//     const repository = dataSource.getRepository(Users);
//     await repository.insert([
//       {
//         username: 'name',
//         email: 'email',
//         password: 'pass',
//       },
//     ]);

//     // ---------------------------------------------------

//     // const userFactory = factoryManager.get(Users);
//     // // save 1 factory generated entity, to the database
//     // await userFactory.save();

//     // // save 5 factory generated entities, to the database
//     // await userFactory.saveMany(5);
//   }
// }

import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Users } from 'src/users/users.model';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 0;');
    await dataSource.query('TRUNCATE TABLE `user_roles`;');
    await dataSource.query('TRUNCATE TABLE `users`;');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 1;');

    const repository = dataSource.getRepository(Users);
    await repository.insert([
      {
        username: 'name',
        email: 'email',
        password: 'pass',
      },
    ]);
  }
}
