import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class OutofRangeException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.OUT_OF_RANGE);
    }
}
