import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigsModule } from 'src/configs/configs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigsModule],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.getOrThrow('DB.HOST'),
                port: configService.getOrThrow('DB.PORT'),
                username: configService.getOrThrow('DB.USERNAME'),
                password: configService.getOrThrow('DB.PASSWORD'),
                database: configService.getOrThrow('DB.NAME'),
                autoLoadEntities: true,
                namingStrategy: new SnakeNamingStrategy(),
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
