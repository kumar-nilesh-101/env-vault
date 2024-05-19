import { join } from 'path';

export const CreateImportPath = (pathToUpdate: string) => {
    return join(process.cwd(), pathToUpdate);
};
