import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from '../../configs/configs.module';
import { DatabaseModule } from '../../db/database.module';
import { ServiceRegistryModule } from '../service-registry/service-registry.module';
import { VariableRegistryModule } from '../variable-registry/variable-registry.module';
import { EnvironmentsRegistryModule } from '../environments-registry/environments-registry.module';

@Module({
    imports: [
        ConfigsModule,
        DatabaseModule,
        EnvironmentsRegistryModule,
        ServiceRegistryModule,
        VariableRegistryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
