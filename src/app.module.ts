

import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BarberModule } from './barber/barber.module';
import { BarbershopModule } from './barbershop/barbershop.module';

@Module({
  imports: [UserModule, BarberModule, BarbershopModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
