import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Cancelled';

export class CancelledException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.CANCELLED);
    }
}
