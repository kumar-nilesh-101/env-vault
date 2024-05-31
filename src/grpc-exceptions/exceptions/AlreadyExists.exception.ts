import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class AlreadyExistsException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.ALREADY_EXISTS);
    }
}
