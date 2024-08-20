import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.model';
import { Users } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([Role, Users, UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
