import { Module } from '@nestjs/common';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryController } from './service-registry.controller';
import { ServiceRegistry } from './entities/service-registry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRegistry])],
    controllers: [ServiceRegistryController],
    providers: [ServiceRegistryService],
})
export class ServiceRegistryModule {}
