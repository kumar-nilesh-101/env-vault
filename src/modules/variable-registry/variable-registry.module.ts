import { Module } from '@nestjs/common';
import { VariableRegistryController } from './variable-registry.controller';
import { VariableRegistryService } from './variable-registry.service';

@Module({
    controllers: [VariableRegistryController],
    providers: [VariableRegistryService],
})
export class VariableRegistryModule {}
