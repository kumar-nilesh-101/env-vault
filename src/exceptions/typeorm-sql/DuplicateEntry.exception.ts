import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';
import { ERROR_CODE_LOOKUP, ERROR_NAMES } from './error-codes';

export class DuplicateEntryException extends BaseGrpcException {
    constructor(error: string | object) {
        const errorCode = status.ALREADY_EXISTS;
        const errorName = ERROR_CODE_LOOKUP[ERROR_NAMES.ER_DUP_ENTRY];
        super(errorName, 'Duplicate entry', errorCode);
    }
}
