import { Injectable } from '@nestjs/common';
import { RedisDataSource } from './RedisDatasource';

@Injectable()
export class CacheService {
    constructor(private dataSource: RedisDataSource) {}

    async get(key: string) {
        await this.dataSource.client.get(key);
    }

    async set(key: string, value: any) {
        await this.dataSource.client.set(key, value);
    }
}
