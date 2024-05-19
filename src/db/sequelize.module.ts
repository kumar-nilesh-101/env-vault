import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule as SM } from '@nestjs/sequelize';
import { join } from 'path';
import { ConfigsModule } from 'src/configs/configs.module';

@Module({
    imports: [
        SM.forRootAsync({
            imports: [ConfigsModule],
            useFactory: (configService: ConfigService) => ({
                dialect: 'sqlite',
                storage: join(
                    process.cwd(),
                    configService.get<string>('DB.FILE_PATH'),
                ),
                autoLoadModels: true,
                synchronize: true,
                repositoryMode: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class SequelizeModule {}
