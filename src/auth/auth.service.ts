import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    delete user.hash;
    return user;
  }
  signin(dto: AuthDto) {
    return { msg: 'hellow signup' };
  }
}
