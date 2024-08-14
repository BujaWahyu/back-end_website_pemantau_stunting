import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyModule } from './baby/baby.module';
import { Baby } from './baby/bayi.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Baby],
      synchronize: true,
    }),
    BabyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
