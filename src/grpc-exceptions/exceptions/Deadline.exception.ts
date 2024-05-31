import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class DeadlineException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.ABORTED);
    }
}
