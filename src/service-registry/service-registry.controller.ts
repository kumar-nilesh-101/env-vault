import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Controller } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Controller()
export class ServiceRegistryController {
    constructor(
        private readonly serviceRegistryService: ServiceRegistryService,
    ) {}

    @GrpcMethod('MSRegistryService', 'RegisterService')
    async registerService(@Payload() serviceName: any) {
        const registrationKey = uuid();

        const dto = new ServiceRegistryDto();
        dto.registryKey = registrationKey;
        dto.serviceName = serviceName.name;
        const res = await this.serviceRegistryService.create(dto);
        return res;
    }

    @GrpcMethod('MSRegistryService', 'GetServiceRegistrationKey')
    async getServiceRegistrationKey(@Payload() serviceName: string) {
        return this.serviceRegistryService.findByServiceName(serviceName);
    }

    @GrpcMethod('MSRegistryService', 'DeregisterService')
    async dergisterService(@Payload() registrationKey: string) {
        return this.serviceRegistryService.remove(registrationKey);
    }
}
