import { Module } from '@nestjs/common';
import { VariablesRegistryController } from './variables-registry.controller';
import { VariablesRegistryService } from './variables-registry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariablesRegistry } from './entities/variables-registry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VariablesRegistry])],
    controllers: [VariablesRegistryController],
    providers: [VariablesRegistryService],
})
export class VariablesRegistryModule {}
