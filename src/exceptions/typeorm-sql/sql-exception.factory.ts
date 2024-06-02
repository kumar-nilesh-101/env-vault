import { QueryError } from 'mysql2';
import { BaseGrpcException } from '../BaseGrpcException.factory';
import { ERROR_CODE_LOOKUP, ERROR_NAMES } from './error-codes';
import { DuplicateEntryException } from './DuplicateEntry.exception';
import { QueryFailedError } from 'typeorm';

export class SqlExceptionFactory {
    constructor(private errorDetails: QueryFailedError<QueryError>) {}

    get grpcException(): BaseGrpcException {
        switch (this.errorDetails.driverError.code) {
            case ERROR_CODE_LOOKUP[ERROR_NAMES.ER_DUP_ENTRY]: {
                return new DuplicateEntryException(this.errorDetails);
            }
            default: {
                const errName = this.errorDetails.driverError.code;
                const erroCode = this.errorDetails.driverError.errno;
                return new BaseGrpcException(
                    errName,
                    this.errorDetails,
                    erroCode,
                );
            }
        }
    }
}
