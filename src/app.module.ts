import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { DatabaseModule } from './db/database.module';
import { ServiceRegistryModule } from './service-registry/service-registry.module';
import { GrpcExceptionsModule } from './grpc-exceptions/grpc-exceptions.module';

@Module({
    imports: [ConfigsModule, DatabaseModule, ServiceRegistryModule, GrpcExceptionsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
