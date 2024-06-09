import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { EnvironmentController } from './environment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentRegistry } from './entities/environment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EnvironmentRegistry])],
    providers: [EnvironmentService],
    controllers: [EnvironmentController],
})
export class EnvironmentsRegistryModule {}
