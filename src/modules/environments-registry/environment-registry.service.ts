import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnvironmentsRegistry } from './entities/environments-registry.entity';
import { EnvironmentsRegistryDto } from './dto/environments-registry.dto';

@Injectable()
export class EnvironmentService {
    constructor(
        @InjectRepository(EnvironmentsRegistry)
        private environmentRepository: Repository<EnvironmentsRegistry>,
    ) {}

    async create(environmentDto: EnvironmentsRegistryDto) {
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
