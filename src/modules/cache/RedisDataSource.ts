import { RedisClientOptions, createClient } from 'redis';

export class RedisDataSource {
    private redisClient: ReturnType<typeof createClient>;

    constructor(
        private options: RedisClientOptions,
        readonly connectionId: string,
    ) {}

    async connect() {
        if (this.redisClient) throw 'Creating duplicate connection';
        this.redisClient = await createClient(this.options).connect();
    }

    get client(): ReturnType<typeof createClient> {
        return this.redisClient;
    }

    async disconnect() {
        await this.client.disconnect();
    }
}
