import { status } from '@grpc/grpc-js';
import { RpcException } from '@nestjs/microservices';

export class BaseGrpcException extends RpcException {
    constructor(error: string | object, statusCode: status) {
        const rpcExceptionPayload = {
            message: JSON.stringify({
                error,
                type: typeof error === 'string' ? 'string' : 'object',
                exceptionName: RpcException.name,
            }),
            code: statusCode,
        };

        super(rpcExceptionPayload);
    }
}
