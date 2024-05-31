import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class DataLossException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.DATA_LOSS);
    }
}
