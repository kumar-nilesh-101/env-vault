import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from '../db/entities/service-registry.entity';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServiceRegistryService {
    constructor(
        @InjectRepository(ServiceRegistry)
        private serviceRegistryRepository: Repository<ServiceRegistry>,
    ) {}

    async create(serviceRegistryDto: ServiceRegistryDto) {
        return await this.serviceRegistryRepository.insert(serviceRegistryDto);
    }

    async findByServiceName(serviceName: string) {
        return await this.serviceRegistryRepository.findOne({
            where: {
                serviceName,
            },
        });
    }

    async remove(registryKey: string) {
        return await this.serviceRegistryRepository.delete({ registryKey });
    }
}
