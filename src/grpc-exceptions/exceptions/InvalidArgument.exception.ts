import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class InvalidArgumentException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.INVALID_ARGUMENT);
    }
}
