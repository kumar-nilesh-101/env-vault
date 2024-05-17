import { validateSync } from 'class-validator';
import { EnvConfig } from './enviroment';
import { plainToInstance } from 'class-transformer';
import { CONFIGURATIONS_ERRORS } from './config.errors';

export class ConfigValidator {
    private plainConfig: EnvConfig;
    constructor(private envConfig: new (...args: any[]) => EnvConfig) {}

    validate(config: Record<string, unknown>) {
        this.plainConfig = plainToInstance(this.envConfig, config, {
            enableImplicitConversion: true,
        });
        const errors = validateSync(this.plainConfig, {
            skipMissingProperties: false,
        });

        for (const error of errors) {
            Object.values(error.constraints).map((str: string) => {
                console.log(str);
            });
        }

        if (errors.length) {
            throw new Error(CONFIGURATIONS_ERRORS.INVALID_CONFIG);
        }

        return this.plainConfig;
    }
}
