import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { HouseModule } from './houses/house.module';

@Module({
  imports: [UserModule, HouseModule],
})
export class AppModule {}
