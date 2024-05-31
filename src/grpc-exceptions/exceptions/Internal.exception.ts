import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class InternalException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.INTERNAL);
    }
}
