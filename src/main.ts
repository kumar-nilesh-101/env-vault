import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { CreateImportPath } from './utils/import-file-path.factory';
import { ReflectionService } from '@grpc/reflection';
import { GrpcExceptionFilter } from './exceptions/filters';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const protoConfig = configService.getOrThrow('APP.PROTO_CONFIG');
    const protoPackages = protoConfig.map((conf) => conf.package);
    const protoPaths = protoConfig.map((conf) => CreateImportPath(conf.path));

    const microserviceOpts: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            package: protoPackages,
            protoPath: protoPaths,
            loader: {
                includeDirs: [
                    CreateImportPath(configService.getOrThrow('APP.PROTO_DIR')),
                ],
            },
            url: configService.getOrThrow('APP.MS_URL'),
            onLoadPackageDefinition: (pkg, server) => {
                new ReflectionService(pkg).addToServer(server);
            },
        },
    };

    app.useGlobalFilters(new GrpcExceptionFilter());
    app.connectMicroservice(microserviceOpts, {
        inheritAppConfig: true,
    });
    app.startAllMicroservices();
}

bootstrap();
