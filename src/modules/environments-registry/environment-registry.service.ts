import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnvironmentsRegistry } from './entities/environments-registry.entity';
import { EnvironmentsRegistryDto } from './dto/environments-registry.dto';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class EnvironmentService {
    constructor(
        @InjectRepository(EnvironmentsRegistry)
        private environmentRepository: Repository<EnvironmentsRegistry>,
        private cacheService: CacheService,
    ) {}

    async create(environmentDto: EnvironmentsRegistryDto) {
        await this.cacheService.set(
            environmentDto.registryKey,
            environmentDto.environmentName,
        );
        return await this.environmentRepository.insert(environmentDto);
    }

    async findByEnvironmentName(environmentName: string) {
        return await this.environmentRepository.findOne({
            where: {
                environmentName,
            },
        });
    }

    async remove(registryKey: string) {
        return await this.environmentRepository.delete({ registryKey });
    }
}
