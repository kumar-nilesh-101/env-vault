import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from './entities/service-registry.entity';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TransformResponse } from 'src/utils/decorators';
import {
    transformServiceRegistryFindResult,
    transformServiceRegistryInsertResult,
} from 'src/utils/transformers';

@Injectable()
export class ServiceRegistryService {
    constructor(
        @InjectRepository(ServiceRegistry)
        private serviceRegistryRepository: Repository<ServiceRegistry>,
    ) {}

    @TransformResponse(transformServiceRegistryInsertResult)
    async create(serviceRegistryDto: ServiceRegistryDto) {
        return await this.serviceRegistryRepository.insert(serviceRegistryDto);
    }

    @TransformResponse(transformServiceRegistryFindResult)
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
