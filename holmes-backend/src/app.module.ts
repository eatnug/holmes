import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { HouseModule } from './houses/house.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    HouseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
