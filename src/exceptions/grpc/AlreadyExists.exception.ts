import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Already Exists';

export class AlreadyExistsException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.ALREADY_EXISTS);
    }
}
