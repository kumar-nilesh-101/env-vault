import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { CacheService } from './cache.service';
import { RedisClientOptions } from 'redis';
import { RedisDataSource } from './RedisDatasource';

@Global()
@Module({})
export class CacheModule {
    static forRoot(options: RedisClientOptions): DynamicModule {
        const dataSourceProvider: Provider = {
            provide: RedisDataSource,
            useFactory: async () => {
                const dataSource = new RedisDataSource(options);
                await dataSource.connect();
                return dataSource;
            },
        };

        return {
            module: CacheModule,
            imports: [],
            providers: [dataSourceProvider, CacheService],
            exports: [CacheService],
        };
    }
}
