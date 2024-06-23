import { DynamicModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { RedisDataSource } from './RedisDatasource';
import { CacheModuleOptions } from './ICacheModuleOptions';

@Module({})
export class CacheModule {
    static registerAsync(moduleOptions: CacheModuleOptions): DynamicModule {
        return {
            module: CacheModule,
            imports: moduleOptions.imports,
            providers: [
                {
                    provide: RedisDataSource,
                    useFactory: moduleOptions.useFactory,
                    inject: moduleOptions.inject,
                },
                CacheService,
            ],
            exports: [CacheService],
        };
    }
}
