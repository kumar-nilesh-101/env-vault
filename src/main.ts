import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const microserviceOpts: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            package: configService.getOrThrow('PROTO_PACKAGE'),
            protoPath: configService.getOrThrow('PROTO_PATH'),
            url: configService.getOrThrow('MS_URL'),
        },
    };
    app.connectMicroservice(microserviceOpts);
}

bootstrap();
