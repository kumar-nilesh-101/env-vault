import { Injectable } from '@nestjs/common';
import { CreateServiceRegistryDto } from './dto/create-service-registry.dto';
import { InjectModel } from '@nestjs/sequelize';
import {
    ServiceRegistry,
    ServiceRegistryRepository,
} from './entities/service-registry.entity';
import { QueryTypes } from 'sequelize';

@Injectable()
export class ServiceRegistryService {
    constructor(
        @InjectModel(ServiceRegistry)
        private serviceRegistryRepository: ServiceRegistryRepository,
    ) {}

    async create(createServiceRegistryDto: CreateServiceRegistryDto) {
        return await this.serviceRegistryRepository.create(
            createServiceRegistryDto as any,
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
