import { ITransformer } from 'src/interfaces/ITransformerFactory';
import { InsertResult } from 'typeorm';
import { EnvironmentsRegistry } from './entities/environments-registry.entity';

export class ResponseTransformer implements ITransformer {
    private registerEnvironment(response: InsertResult) {
        const { registryKey } = response.identifiers[0];
        return { key: registryKey };
    }

    private getEnvironmentRegistryKey(response: EnvironmentsRegistry) {
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
