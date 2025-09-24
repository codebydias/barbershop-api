import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBarberDto } from './dto/create.dto';
import { hash } from 'bcryptjs';



@Injectable()
export class BarberService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateBarberDto) {

    const barberExist = await this.prisma.barber.findUnique({ where: { email: data.email } })

    if (barberExist) {
      throw new ConflictException('This email is already registered')
    }

    const hashPassword = await hash(data.password, 12);

    const barber = await this.prisma.barber.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashPassword,
        cpf: data.cpf,
        description: data.description ?? null,
        barberShopId: 1,
      }
    })

    return {
      'status': 'ok'
    };



  }


}
