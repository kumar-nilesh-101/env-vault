import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Unimplemented';

export class UnimplementedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.UNIMPLEMENTED);
    }
}
