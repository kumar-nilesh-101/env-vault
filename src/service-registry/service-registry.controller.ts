import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ServiceRegistryService } from './service-registry.service';
import { CreateServiceRegistryDto } from './dto/create-service-registry.dto';

@Controller()
export class ServiceRegistryController {
    constructor(
        private readonly serviceRegistryService: ServiceRegistryService,
    ) {}

    @MessagePattern('registerService')
    create(@Payload() createServiceRegistryDto: CreateServiceRegistryDto) {
        return this.serviceRegistryService.create(createServiceRegistryDto);
    }

    @MessagePattern('getServiceRegistrationKey')
    getServiceRegistrationKey(@Payload() serviceName: string) {
        return this.serviceRegistryService.findByServiceName(serviceName);
    }

    @MessagePattern('removeServiceRegistry')
    dergisterService(@Payload() registerationKey: string) {
        return this.serviceRegistryService.remove(registerationKey);
    }
}
