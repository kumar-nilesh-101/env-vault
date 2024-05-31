import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class ResourceExhaustedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.RESOURCE_EXHAUSTED);
    }
}
