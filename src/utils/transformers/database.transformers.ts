import { ServiceRegistry } from 'src/service-registry/entities/service-registry.entity';
import { InsertResult } from 'typeorm';

export function transformServiceRegistryInsertResult(response: InsertResult) {
    const { registryKey } = response.generatedMaps[0];
    return { key: registryKey };
}

export function transformServiceRegistryFindResult(response: ServiceRegistry) {
    const { registryKey } = response;
    return { key: registryKey };
}
