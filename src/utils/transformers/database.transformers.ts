import { InsertResult } from 'typeorm';

export function transformInsertResult(response: InsertResult) {
    const { registryKey } = response.generatedMaps[0];
    return { key: registryKey };
}
