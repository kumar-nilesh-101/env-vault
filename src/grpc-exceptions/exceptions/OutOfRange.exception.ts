import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Out Of Range';

export class OutofRangeException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.OUT_OF_RANGE);
    }
}
