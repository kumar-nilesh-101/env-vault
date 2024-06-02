import { status } from '@grpc/grpc-js';
import { BaseGrpcException } from '../BaseGrpcException.factory';

const name = 'Permission Denied';

export class PermissionDeniedException extends BaseGrpcException {
    constructor(error: string | object) {
        super(name, error, status.PERMISSION_DENIED);
    }
}
