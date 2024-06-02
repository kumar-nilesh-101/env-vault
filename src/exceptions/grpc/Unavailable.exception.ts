import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Unavailale';

export class UnavailableException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.UNAVAILABLE);
    }
}
