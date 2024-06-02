import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Unknown';

export class UnknownException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.UNKNOWN);
    }
}
