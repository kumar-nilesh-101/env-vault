import { RpcException } from '@nestjs/microservices';

export class BaseGrpcException extends RpcException {
    constructor(name: string, error: string | object, statusCode: number) {
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
