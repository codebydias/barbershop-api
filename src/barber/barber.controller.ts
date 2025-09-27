import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { BarberService } from './barber.service';
import { CreateBarberDto } from './dto/create.dto';

@Controller('barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) { }


  @Post()
  @HttpCode(201)
  create(@Body() CreateBarberDto: CreateBarberDto) {

    return this.barberService.create(CreateBarberDto)
  }

}
