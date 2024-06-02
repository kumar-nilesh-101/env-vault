import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Failed Precondition';

export class FailedPreconditionException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.FAILED_PRECONDITION);
    }
}
