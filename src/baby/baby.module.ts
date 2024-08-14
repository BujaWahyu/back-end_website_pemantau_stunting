import { Module } from '@nestjs/common';
import { BabyController } from './baby.controller';
import { BabyService } from './baby.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Baby } from './bayi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Baby])],
  controllers: [BabyController],
  providers: [BabyService]
})
export class BabyModule {}
