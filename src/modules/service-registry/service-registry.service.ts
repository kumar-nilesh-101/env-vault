import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from './entities/service-registry.entity';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class ServiceRegistryService {
    constructor(
        @InjectRepository(ServiceRegistry)
        private serviceRegistryRepository: Repository<ServiceRegistry>,
        private cacheService: CacheService,
    ) {}

    async create(serviceRegistryDto: ServiceRegistryDto) {
        this.cacheService.set(
            serviceRegistryDto.registryKey,
            serviceRegistryDto.serviceName,
        );
        serviceRegistryDto.environment = '1dac7db2-2bc6-4288-b741-4341260d5796';
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
