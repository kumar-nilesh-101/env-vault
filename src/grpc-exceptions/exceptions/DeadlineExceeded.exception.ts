import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class DeadlineExceededException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.ABORTED);
    }
}