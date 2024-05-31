import { ParseUUIDPipe } from '@nestjs/common';
import { InvalidArgumentException } from 'src/exceptions/grpc';

export const ValidateUUID = new ParseUUIDPipe({
    exceptionFactory: (err: string) => new InvalidArgumentException(err),
    version: '4',
});
