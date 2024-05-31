import { status } from '@grpc/grpc-js';
import { RpcException } from '@nestjs/microservices';

export class BaseGrpcException extends RpcException {
    constructor(name: string, error: string | object, statusCode: status) {
        const rpcExceptionPayload = {
            message: JSON.stringify({
                error,
                name,
            }),
            code: statusCode,
        };

        super(rpcExceptionPayload);
    }
}
