import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Unauthenticated';

export class UnauthenticatedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.UNAUTHENTICATED);
    }
}
