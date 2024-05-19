import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { CreateImportPath } from './utils/import-file-path.factory';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    console.log(join(__dirname, configService.getOrThrow('APP.PROTO_PATH')));
    const microserviceOpts: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            package: configService.getOrThrow('APP.PROTO_PACKAGE'),
            protoPath: CreateImportPath(
                configService.getOrThrow('APP.PROTO_PATH'),
            ),
            loader: {
                includeDirs: [
                    CreateImportPath(
                        configService.getOrThrow('APP.PROTO_PATH'),
                    ),
                ],
            },
            url: configService.getOrThrow('APP.MS_URL'),
        },
    };
    app.connectMicroservice(microserviceOpts).listen();
}

bootstrap();
