import { ITransformer } from 'src/interfaces/ITransformerFactory';
import { InsertResult } from 'typeorm';
import { EnvironmentRegistry } from './entities/environment.entity';

export class ResponseTransformer implements ITransformer {
    private registerEnvironment(response: InsertResult) {
        const { registryKey } = response.identifiers[0];
        return { key: registryKey };
    }

    private getEnvironmentRegistryKey(response: EnvironmentRegistry) {
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
