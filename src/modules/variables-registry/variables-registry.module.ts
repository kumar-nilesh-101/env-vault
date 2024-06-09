import { Module } from '@nestjs/common';
import { VariablesRegistryController } from './variables-registry.controller';
import { VariablesRegistryService } from './variables-registry.service';

@Module({
    controllers: [VariablesRegistryController],
    providers: [VariablesRegistryService],
})
export class VariablesRegistryModule {}
