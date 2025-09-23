

import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';
import { BarberModule } from './barber/barber.module';

@Module({
  imports: [UserModule, BarberModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
