import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './db/sequelize.config';

@Module({
  imports: [SequelizeModule.forRoot(SequelizeConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
