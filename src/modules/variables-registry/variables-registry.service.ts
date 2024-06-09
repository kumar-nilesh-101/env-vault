import { Injectable } from '@nestjs/common';
import { VariablesRegistry } from './entities/variables-registry.entity';
import { VariablesDto } from './dto/variables-registry.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VariablesRegistryService {
    constructor(
        @InjectRepository(VariablesRegistry)
        private readonly variablesRepository: Repository<VariablesRegistry>,
    ) {}

    async create(variablesRegistryDto: VariablesDto) {
        return await this.variablesRepository.insert(variablesRegistryDto);
    }

    async findByVariableName(variableName: string) {
        return await this.variablesRepository.findOne({
            where: {
                variableName,
            },
        });
    }

    async removeVariable(variableName: string) {
        return await this.variablesRepository.delete({ variableName });
    }
}
