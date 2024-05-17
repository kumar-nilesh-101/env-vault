import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigType, ImportConfiguration } from './import-configuration';
import { IServerConfig } from './interface/IServerConfig';
import { IDatabaseConfig } from './interface/IDatabaseConfig';
// import { ConfigValidator } from './config.validator';
// import { EnvConfig } from './enviroment';

const applicationConfig = new ImportConfiguration<IServerConfig>(
    ConfigType.APP,
    process.env['npm_config_app_config'],
);

const dbConfig = new ImportConfiguration<IDatabaseConfig>(
    ConfigType.DB,
    process.env['npm_config_db_config'],
);

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [applicationConfig.register(), dbConfig.register()],
            // validate: new ConfigValidator(EnvConfig).validate,
            isGlobal: true,
        }),
    ],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class ConfigsModule {}
