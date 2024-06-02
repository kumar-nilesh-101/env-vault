import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Data Loss';

export class DataLossException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.DATA_LOSS);
    }
}
