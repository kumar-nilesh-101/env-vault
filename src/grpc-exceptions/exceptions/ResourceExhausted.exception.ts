import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Resource Exhausted';

export class ResourceExhaustedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.RESOURCE_EXHAUSTED);
    }
}
