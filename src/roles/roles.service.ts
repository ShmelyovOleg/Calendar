import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './roles.model';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dro';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {}

    async createRole(role: CreateRoleDto): Promise<CreateRoleDto> {
        return await this.roleRepository.save(role);
      }

      async getRoleByValue(value: string){
        return await this.roleRepository.findOneBy({ value });
      }
}
