import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SignupDto } from "./dto/signup.dto";
import { UserService } from "src/user/user.service";
import { PrismaService } from "prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { SigninDto } from "./dto/singin.dto";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly primsaService: PrismaService
  ) {}

  async signup(data: SignupDto) {
    const newUser = await this.userService.create(data);

    return await this.generateAccesToken(newUser.id, newUser.role);
  }

  async signin(data: SigninDto) {
    const { email, password } = data;

    const user = await this.primsaService.user.findUnique({ where: { email } });

    if (!user) throw new UnauthorizedException("Invalid Credentials");

    const isValidPassword = compare(password, user.password);

    if (!isValidPassword)
      throw new UnauthorizedException("Invalid credentials");

    return this.generateAccesToken(user.id, user.role);
  }

  private generateAccesToken(userId: number, role: string) {
    return this.jwtService.signAsync({ sub: userId, role });
  }
}
