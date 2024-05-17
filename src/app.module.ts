import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './db/sequelize.config';
import { ConfigsModule } from './configs/configs.module';

@Module({
    imports: [SequelizeModule.forRoot(SequelizeConfig), ConfigsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
