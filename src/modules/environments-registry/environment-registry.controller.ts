import { Controller, UseInterceptors } from '@nestjs/common';
import { EnvironmentService } from './environment-registry.service';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ValidateUUID } from 'src/validations/validators';
import { uuid } from 'uuidv4';
import { EnvironmentsRegistryDto } from './dto/environments-registry.dto';
import { EnvironmentsInterceptor } from './interceptors/environments-registry.interceptor';

@UseInterceptors(EnvironmentsInterceptor)
@Controller()
export class EnvironmentController {
    constructor(private readonly environmentService: EnvironmentService) {}

    @GrpcMethod('EnvironmentsRegistryService', 'RegisterEnvironment')
    async registerEnvironment(@Payload('name') envName: string) {
        const registryKey = uuid();

        const dto = new EnvironmentsRegistryDto();
        dto.environmentName = envName;
        dto.registryKey = registryKey;

        return await this.environmentService.create(dto);
    }

    @GrpcMethod('EnvironmentsRegistryService', 'GetEnvironmentRegistryKey')
    async getEnvironmentRegistryKey(@Payload('name') envName: string) {
        return await this.environmentService.findByEnvironmentName(envName);
    }

    @GrpcMethod('EnvironmentsRegistryService', 'DeregisterEnvironment')
    async deregisterEnvironment(
        @Payload('key', ValidateUUID) registryKey: string,
    ) {
        return await this.environmentService.remove(registryKey);
    }
}
