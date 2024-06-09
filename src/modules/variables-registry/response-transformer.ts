import { ITransformer } from 'src/interfaces/ITransformerFactory';
import { InsertResult } from 'typeorm';
import { VariablesRegistry } from './entities/variables-registry.entity';

export class ResponseTransformer implements ITransformer {
    private registerVariable(response: InsertResult) {
        return {};
    }

    private getVariable(response: VariablesRegistry) {
        return {};
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
