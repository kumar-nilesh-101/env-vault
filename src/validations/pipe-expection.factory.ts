import { RpcException } from '@nestjs/microservices';

export class GrpcExceptionPipeFactory {
    createException(exceptionType: { new (...args: any[]): RpcException }) {
        return (errors) => {
            new exceptionType(errors);
        };
    }
}
