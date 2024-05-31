import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class UnauthenticatedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.UNAUTHENTICATED);
    }
}
