import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Invalid Argument';

export class InvalidArgumentException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.INVALID_ARGUMENT);
    }
}
