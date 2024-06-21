import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from '../../configs/configs.module';
import { DatabaseModule } from '../../db/database.module';
import { ServiceRegistryModule } from '../service-registry/service-registry.module';
import { EnvironmentsRegistryModule } from '../environments-registry/environments-registry.module';
import { VariablesRegistryModule } from '../variables-registry/variables-registry.module';
import { CacheModule } from '../cache/cache.module';

@Module({
    imports: [
        ConfigsModule,
        DatabaseModule,
        EnvironmentsRegistryModule,
        ServiceRegistryModule,
        VariablesRegistryModule,
        CacheModule.forRoot({
            socket: {
                host: '127.0.0.1',
                port: 6379,
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
