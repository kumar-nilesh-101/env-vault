import { Controller } from '@nestjs/common';
import { VariablesRegistryService } from './variables-registry.service';
import { Payload } from '@nestjs/microservices';
import { VariablesDto } from './dto/variables-registry.dto';

@Controller('variables-registry')
export class VariablesRegistryController {
    constructor(
        private readonly variablesRegistryService: VariablesRegistryService,
    ) {}

    async registerVariable(@Payload() variableDto: VariablesDto) {
        return await this.variablesRegistryService.create(variableDto);
    }
}
