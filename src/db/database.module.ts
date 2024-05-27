import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { ConfigsModule } from 'src/configs/configs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigsModule],
            useFactory: (configService: ConfigService) => ({
                type: 'sqlite',
                database: join(
                    process.cwd(),
                    configService.get<string>('DB.FILE_PATH'),
                ),
                autoLoadEntities: true,
                namingStrategy: new SnakeNamingStrategy(),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
