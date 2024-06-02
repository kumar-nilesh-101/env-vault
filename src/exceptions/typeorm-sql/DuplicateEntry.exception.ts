import { BaseGrpcException } from '../BaseGrpcException.factory';
import { ERROR_CODE_LOOKUP, ERROR_NAMES } from './error-codes';

export class DuplicateEntryException extends BaseGrpcException {
    constructor(error: string | object) {
        const errorCode = ERROR_NAMES.ER_DUP_ENTRY;
        const errorName = ERROR_CODE_LOOKUP[errorCode];
        super(errorName, error, errorCode);
    }
}
