import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Internal';

export class InternalException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.INTERNAL);
    }
}
