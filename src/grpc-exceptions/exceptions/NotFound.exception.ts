import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class NotFoundException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.NOT_FOUND);
    }
}
