import { InsertResult } from 'typeorm';
import { ServiceRegistry } from './entities/service-registry.entity';
import { ITransformer } from 'src/interfaces/ITransformerFactory';

export class ResponseTransformer implements ITransformer {
    private registerService(response: InsertResult) {
        const { registryKey } = response.identifiers[0];
        return { key: registryKey };
    }

    private getServiceRegistryKey(response: ServiceRegistry) {
        const { registryKey } = response;
        return { key: registryKey };
    }

    transform(handlerName: string, response: any) {
        const handlerFn = this[handlerName];
        if (handlerFn) {
            return handlerFn(response);
        } else {
            return response;
        }
    }
}
