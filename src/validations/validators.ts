import { ParseUUIDPipe } from '@nestjs/common';
import { InvalidArgumentException } from 'src/grpc-exceptions/exceptions';

export const ValidateUUID = new ParseUUIDPipe({
    exceptionFactory: (err: string) => new InvalidArgumentException(err),
    version: '4',
});
