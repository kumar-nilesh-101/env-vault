import { GrpcMethod, GrpcService, Payload } from '@nestjs/microservices';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryDto } from './dto/service-registry.dto';
import { Controller } from '@nestjs/common';

@Controller()
@GrpcService('MSRegistryService')
export class ServiceRegistryController {
    constructor(
        private readonly serviceRegistryService: ServiceRegistryService,
    ) {}

    @GrpcMethod()
    registerService(@Payload() registerServiceDto: ServiceRegistryDto) {
        return this.serviceRegistryService.create(registerServiceDto);
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
