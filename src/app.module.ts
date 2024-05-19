import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { SequelizeModule } from './db/sequelize.module';
import { ServiceRegistryModule } from './service-registry/service-registry.module';

@Module({
    imports: [ConfigsModule, SequelizeModule, ServiceRegistryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
