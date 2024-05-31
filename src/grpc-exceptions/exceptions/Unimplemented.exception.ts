import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class UnimplementedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.UNIMPLEMENTED);
    }
}
