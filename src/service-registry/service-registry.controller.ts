import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Controller, UseInterceptors } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { ServiceRegistryInterceptor } from './interceptors/service-registry.interceptor';
import { ValidateUUID } from 'src/validations/validators';

@UseInterceptors(ServiceRegistryInterceptor)
@Controller()
export class ServiceRegistryController {
    constructor(
        private readonly serviceRegistryService: ServiceRegistryService,
    ) {}

    @GrpcMethod('MSRegistryService', 'RegisterService')
    async registerService(@Payload('name') serviceName: any) {
        const registrationKey = uuid();

        const dto = new ServiceRegistryDto();
        dto.registryKey = registrationKey;
        dto.serviceName = serviceName;

        return await this.serviceRegistryService.create(dto);
    }

    @GrpcMethod('MSRegistryService', 'GetServiceRegistrationKey')
    async getServiceRegistrationKey(@Payload('name') serviceName: any) {
        return await this.serviceRegistryService.findByServiceName(serviceName);
    }

    @GrpcMethod('MSRegistryService', 'DeregisterService')
    async dergisterService(@Payload('key', ValidateUUID) registryKey: any) {
        await this.serviceRegistryService.remove(registryKey);
    }
}
