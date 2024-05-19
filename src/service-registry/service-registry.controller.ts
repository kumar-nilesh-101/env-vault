import { GrpcMethod, GrpcService, Payload } from '@nestjs/microservices';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Controller } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Controller()
@GrpcService('MSRegistryService')
export class ServiceRegistryController {
    constructor(
        private readonly serviceRegistryService: ServiceRegistryService,
    ) {}

    @GrpcMethod()
    registerService(@Payload() serviceName: string) {
        const registrationKey = uuid();

        const dto = new ServiceRegistryDto();
        dto.registryKey = registrationKey;
        dto.serviceName = serviceName;
        return this.serviceRegistryService.create(dto);
    }

    @GrpcMethod()
    getServiceRegistrationKey(@Payload() serviceName: string) {
        return this.serviceRegistryService.findByServiceName(serviceName);
    }

    @GrpcMethod()
    dergisterService(@Payload() registrationKey: string) {
        return this.serviceRegistryService.remove(registrationKey);
    }
}
