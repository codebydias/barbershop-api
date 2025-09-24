import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBarberDto } from './dto/create.dto';
import { formatDateToBR } from 'src/shared/utils/data';


@Injectable()
export class BarberService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateBarberDto) {

    const barberExist = await this.prisma.barber.findUnique({ where: { email: data.email } })

    if (barberExist) {
      throw new ConflictException('This email is already registered')
    }

    const barber = await this.prisma.barber.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
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
