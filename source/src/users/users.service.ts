// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './users.model';
// import { CreateUserDto } from './dto/create-user.dto';

// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectRepository(User) private userRepository: Repository<User>) {}

//     async createUser(dto: CreateUserDto) {
//         const user = await this.userRepository.create(dto);
//         return user
//     }

//     async getAllUsers() {
//         const users = await this.userRepository.find();
//         return users;

//     }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.model';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private roleService: RolesService
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find({
      relations: ['roles'],
    });
  }

  async findOne(id: number): Promise<Users> {
    return await this.usersRepository.findOneBy({ id });
  }

  //  async create(dto: CreateUserDto): Promise<Users> {
  //   const user = await this.usersRepository.save(dto);
  //   const role = await this.roleService.getRoleByValue('USER')
  //   await user.$set('roles', [role.id]);
  //   return await this.usersRepository.save(user);
  // }

  async create(dto: CreateUserDto): Promise<Users> {
    const user = this.usersRepository.create(dto);
    await this.usersRepository.save(user);
    const role = await this.roleService.getRoleByValue('USER');
    user.roles = [role];
    return await this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: ['roles'],
    });
    return user;
  }
}
