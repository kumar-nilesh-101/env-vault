import { Module } from '@nestjs/common';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryController } from './service-registry.controller';
import { PROVIDER_TOKENS } from './provider-token.constants';
import { ServiceRegistry } from '../db/entities/service-registry.entity';
import { SequelizeModule } from 'src/db/sequelize.module';

@Module({
    imports: [SequelizeModule],
    controllers: [ServiceRegistryController],
    providers: [
        {
            provide: PROVIDER_TOKENS.SERVICE_REGISTRY,
            useValue: ServiceRegistry,
        },
        ServiceRegistryService,
    ],
})
export class ServiceRegistryModule {}
