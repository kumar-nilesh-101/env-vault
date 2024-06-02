import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';
import { ERROR_CODE_LOOKUP, ERROR_NAMES } from './error-codes';
import { QueryFailedError } from 'typeorm';

export class DuplicateEntryException extends BaseGrpcException {
    constructor(error: QueryFailedError) {
        const errorCode = status.ALREADY_EXISTS;
        const errorName = ERROR_CODE_LOOKUP[ERROR_NAMES.ER_DUP_ENTRY];

        const regex = /'([^']*)'/g;
        const fields = [...error.message.matchAll(regex)];

        super(errorName, `duplicate value ${fields[0][0]}`, errorCode);
    }
}
