import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { Users } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { RolesService } from "./roles/roles.service";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers:[],
    imports: [
        ConfigModule.forRoot({
            envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.HOST,
            port: Number(process.env.BD_PORT),
            username: process.env.USER_NAME,
            password: process.env.BD_PASSWORD,
            database: process.env.BD_NAME,
            entities: [Users, Role, UserRoles],
            synchronize: true, 
          }),
          UsersModule,
          RolesModule,
          AuthModule,
    ]
})
export class AppModule {}