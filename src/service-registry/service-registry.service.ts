import { Inject, Injectable } from '@nestjs/common';
import { ServiceRegistryRepository } from './entities/service-registry.entity';
import { QueryTypes } from 'sequelize';
import { PROVIDER_TOKENS } from './provider-token.constants';
import { ServiceRegistryDto } from './dto/service-registry.dto';

@Injectable()
export class ServiceRegistryService {
    constructor(
        @Inject(PROVIDER_TOKENS.SERVICE_REGISTRY)
        private serviceRegistryRepository: ServiceRegistryRepository,
    ) {}

    async create(serviceRegistryDto: ServiceRegistryDto) {
        return await this.serviceRegistryRepository.create(
            serviceRegistryDto as any,
        );
    }

    async findByServiceName(serviceName: string) {
        return await this.serviceRegistryRepository.findOne({
            type: QueryTypes.SELECT,
            where: {
                serviceName,
            },
        });
    }

    async remove(registrationKey: string) {
        return await this.serviceRegistryRepository.destroy({
            where: {
                registrationKey,
            },
        });
    }
}
