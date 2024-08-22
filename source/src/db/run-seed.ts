import { dataSourceOptions } from './data-source';
import { DataSource } from 'typeorm';

(async () => {
  const dataSource = new DataSource(dataSourceOptions);
  await dataSource.initialize();

  const userSeeder = new (await import('./seeds/user.seeder')).default();
  await userSeeder.run(dataSource, null);

  await dataSource.destroy();
})();
