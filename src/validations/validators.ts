import { ParseUUIDPipe } from '@nestjs/common';
import { GrpcExceptionPipeFactory } from './pipe-expection.factory';
import { InvalidArgumentException } from 'src/grpc-exceptions/exceptions';

export const ValidateUUID = new ParseUUIDPipe({
    exceptionFactory: new GrpcExceptionPipeFactory().createException(
        InvalidArgumentException,
    ),
});
