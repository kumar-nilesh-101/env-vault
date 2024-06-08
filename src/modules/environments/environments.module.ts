import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { EnvironmentController } from './environment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Environment } from './entities/environment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Environment])],
    providers: [EnvironmentService],
    controllers: [EnvironmentController],
})
export class EnvironmentsModule {}
