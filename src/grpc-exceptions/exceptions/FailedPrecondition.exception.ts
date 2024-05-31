import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class FailedPreconditionException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.FAILED_PRECONDITION);
    }
}
