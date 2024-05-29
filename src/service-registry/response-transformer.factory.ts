import { InsertResult } from 'typeorm';
import { ServiceRegistry } from './entities/service-registry.entity';
import { ITransformerFactory } from 'src/ITransformerFactory';

export class ResponseTransformerFactory implements ITransformerFactory {
    private registerService(response: InsertResult) {
        const { registryKey } = response.identifiers[0];
        return { key: registryKey };
    }

    private getServiceRegistrationKey(response: ServiceRegistry) {
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
