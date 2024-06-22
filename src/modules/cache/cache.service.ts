import { Injectable } from '@nestjs/common';
import { RedisDataSource } from './RedisDatasource';

@Injectable()
export class CacheService {
    constructor(private dataSource: RedisDataSource) {}

    async get(key: string) {
        await this.dataSource.client.get(key);
    }
}
