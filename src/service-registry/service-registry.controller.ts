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

        return await this.serviceRegistryService.create(dto);
    }

    @GrpcMethod('MSRegistryService', 'GetServiceRegistrationKey')
    async getServiceRegistrationKey(@Payload() serviceName: any) {
        const res = await this.serviceRegistryService.findByServiceName(
            serviceName.name,
        );
        return res;
    }

    @GrpcMethod('MSRegistryService', 'DeregisterService')
    async dergisterService(@Payload() registryKey: any) {
        const res = await this.serviceRegistryService.remove(registryKey.key);
        return res;
    }
}
