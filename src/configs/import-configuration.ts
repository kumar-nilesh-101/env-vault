import { ConfigFactory, registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';

export const ConfigType = {
    APP: 'APP',
    DB: 'DB',
    REDIS: 'REDIS',
} as const;

export type ConfigType = keyof typeof ConfigType;

export class ImportConfiguration<T> {
    constructor(
        private readFor: ConfigType,
        private configFilePath: string,
    ) {}

    private get envAsJSON(): ConfigFactory<T> {
        return JSON.parse(
            readFileSync(this.configFilePath, 'utf-8'),
        ) as ConfigFactory<T>;
    }

    register() {
        return registerAs(this.readFor, () => this.envAsJSON);
    }
}
