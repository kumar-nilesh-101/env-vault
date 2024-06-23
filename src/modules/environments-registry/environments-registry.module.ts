import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment-registry.service';
import { EnvironmentController } from './environment-registry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentsRegistry } from './entities/environments-registry.entity';
import { CacheModule } from '../cache/cache.module';
import { ConfigsModule } from 'src/configs/configs.module';
import { ConfigService } from '@nestjs/config';

const DATABASE_NUMBER = 0;

@Module({
    imports: [
        TypeOrmModule.forFeature([EnvironmentsRegistry]),
        CacheModule.registerAsync({
            imports: [ConfigsModule],
            useFactory: (configService: ConfigService) => {
                return {
                    socket: {
                        host: configService.getOrThrow('REDIS.HOST'),
                        port: configService.getOrThrow('REDIS.PORT'),
                    },
                    database: DATABASE_NUMBER,
                };
            },
            inject: [ConfigService],
        }),
    ],
    providers: [EnvironmentService],
    controllers: [EnvironmentController],
})
export class EnvironmentsRegistryModule {}
