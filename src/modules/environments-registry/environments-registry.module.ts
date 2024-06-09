import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment-registry.service';
import { EnvironmentController } from './environment-registry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentsRegistry } from './entities/environments-registry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EnvironmentsRegistry])],
    providers: [EnvironmentService],
    controllers: [EnvironmentController],
})
export class EnvironmentsRegistryModule {}
