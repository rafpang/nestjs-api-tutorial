import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'DATABASE_URL',
      useValue: process.env.DATABASE_URL,
    },
  ],
})
export class PrismaModule {}
