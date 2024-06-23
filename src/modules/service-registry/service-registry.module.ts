import { Module } from '@nestjs/common';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryController } from './service-registry.controller';
import { ServiceRegistry } from './entities/service-registry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRegistryInterceptor } from './interceptors/service-registry.interceptor';
import { CacheModule } from '../cache/cache.module';
import { ConfigsModule } from 'src/configs/configs.module';
import { ConfigService } from '@nestjs/config';

const DATABASE_NUMBER = 1;

@Module({
    imports: [
        TypeOrmModule.forFeature([ServiceRegistry]),
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
    controllers: [ServiceRegistryController],
    providers: [ServiceRegistryService, ServiceRegistryInterceptor],
})
export class ServiceRegistryModule {}
