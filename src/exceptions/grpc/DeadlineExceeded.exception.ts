import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

const name = 'Deadline Exceeded';

export class DeadlineExceededException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.ABORTED);
    }
}
