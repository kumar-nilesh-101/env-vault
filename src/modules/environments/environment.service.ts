import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Environment } from './entities/environment.entity';
import { EnvironmentDto } from './dto/environments.dto';

@Injectable()
export class EnvironmentService {
    constructor(
        @InjectRepository(Environment)
        private environmentRepository: Repository<Environment>,
    ) {}

    async create(environmentDto: EnvironmentDto) {
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
