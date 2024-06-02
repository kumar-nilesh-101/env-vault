import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Aborted Exception';
export class AbortedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.ABORTED);
    }
}
