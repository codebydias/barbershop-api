import { ConflictException, Injectable } from '@nestjs/common';
import { CreateBarbershopDto } from './dto/create.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BarbershopService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateBarbershopDto) {

        const barbershopExist = await this.prisma.barberShop.findFirst({ where: { name: data.name } })

        if (barbershopExist) {
            throw new ConflictException('This email is already registered')
        }

        const barbershop = await this.prisma.barberShop.create({
            data: {
                name: data.name,
                adress: data.adress
            }
        })

        return {
            'status': 'ok',
            'barbershop': barbershop.name
        };



    }

}
