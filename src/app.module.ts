import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { DatabaseModule } from './db/database.module';
import { ServiceRegistryModule } from './service-registry/service-registry.module';

@Module({
    imports: [ConfigsModule, DatabaseModule, ServiceRegistryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
