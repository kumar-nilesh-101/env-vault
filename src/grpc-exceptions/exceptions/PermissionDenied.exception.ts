import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from './BaseGrpcException.factory';

export class PermissionDeniedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(error, status.PERMISSION_DENIED);
    }
}
