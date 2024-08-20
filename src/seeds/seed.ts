import { getRepository } from 'typeorm';
import { Users } from '../users/users.model';
import { Role } from '../roles/roles.model';

export async function seed() {
  const roleRepository = getRepository(Role);
  const userRepository = getRepository(Users);

  const adminRole = roleRepository.create({
    value: 'Admin',
    description: 'Admin role',
  });
  const userRole = roleRepository.create({
    value: 'User',
    description: 'User role',
  });

  await roleRepository.save([adminRole, userRole]);

  const adminUser = userRepository.create({
    username: 'admin',
    password: 'adminpass',
    email: 'admin@example.com',
    position: 'Administrator',
    status: 'active',
    roles: [adminRole],
  });

  const regularUser = userRepository.create({
    username: 'user',
    password: 'userpass',
    email: 'user@example.com',
    position: 'User',
    status: 'active',
    roles: [userRole],
  });

  await userRepository.save([adminUser, regularUser]);
}
