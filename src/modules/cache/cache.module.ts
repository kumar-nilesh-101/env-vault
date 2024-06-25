import { DynamicModule, Module, OnModuleDestroy } from '@nestjs/common';
import { CacheService } from './cache.service';
import { RedisDataSource } from './RedisDatasource';
import { CacheModuleOptions } from './ICacheModuleOptions';
import { RedisClientOptions } from 'redis';
import { uuid } from 'uuidv4';

const REDIS_CONNECTIONS_OPTIONS_TOKEN = Symbol.for('REDIS');

@Module({})
export class CacheModule implements OnModuleDestroy {
    private static redisDataSource: RedisDataSource;

    static registerAsync(moduleOptions: CacheModuleOptions): DynamicModule {
        return {
            module: CacheModule,
            imports: moduleOptions.imports,
            providers: [
                {
                    provide: 'noop',
                    useValue: uuid(),
                },
                {
                    provide: REDIS_CONNECTIONS_OPTIONS_TOKEN,
                    useFactory: moduleOptions.useFactory,
                    inject: moduleOptions.inject,
                },
                {
                    provide: RedisDataSource,
                    useFactory: async (options: RedisClientOptions) => {
                        const dataSource = new RedisDataSource(options, uuid());
                        await dataSource.connect();
                        this.redisDataSource = dataSource;
                        return dataSource;
                    },
                    inject: [REDIS_CONNECTIONS_OPTIONS_TOKEN],
                },
                CacheService,
            ],
            exports: [CacheService],
        };
    }

    async onModuleDestroy() {
        await CacheModule.redisDataSource.client.disconnect();
    }
}
