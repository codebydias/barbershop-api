import { ConflictException, Injectable } from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { PrismaService } from "prisma/prisma.service";
import { UpdateDto } from "./dto/update.dto";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateDto) {
    const emailExist = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (emailExist) throw new ConflictException("This Email already exist");

    const { name, email, password } = data;

    return this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        role: "USER",
      },
    });
  }

  async findUnique(userId: number) {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }

  update(data: UpdateDto) {
    const { email, name, password } = data;

    return this.prismaService.user.update({
      where: { email: data.email },
      data: {
        email,
        name,
        password,
      },
    });
  }
}
