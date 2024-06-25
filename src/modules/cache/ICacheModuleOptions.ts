import { RedisClientOptions } from 'redis';

export interface CacheModuleOptions {
    imports: Array<any>;
    useFactory: (
        ...args: any[]
    ) => RedisClientOptions | Promise<RedisClientOptions>;
    inject: Array<any>;
}
