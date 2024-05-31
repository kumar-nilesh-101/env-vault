import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Not Found';

export class NotFoundException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.NOT_FOUND);
    }
}
