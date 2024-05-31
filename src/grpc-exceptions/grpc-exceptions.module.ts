import { Module } from '@nestjs/common';
import * as GrpcExceptions from './exceptions/';
import { ERROR_PROVIDER_TOKENS } from './provider.tokens';

const providers = [
    {
        provide: ERROR_PROVIDER_TOKENS.ABORTED,
        useClass: GrpcExceptions.AbortedException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.ALREADY_EXISTS,
        useClass: GrpcExceptions.AlreadyExistsException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.CANCELLED,
        useClass: GrpcExceptions.CancelledException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.DATA_LOSS,
        useClass: GrpcExceptions.DataLossException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.DEADLINE_EXCEEDED,
        useClass: GrpcExceptions.DeadlineExceededException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.FAILED_PRECONDITION,
        useClass: GrpcExceptions.FailedPreconditionException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.INTERNAL,
        useClass: GrpcExceptions.InternalException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.INVALID_ARGUMENT,
        useClass: GrpcExceptions.InvalidArgumentException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.OUT_OF_RANGE,
        useClass: GrpcExceptions.OutofRangeException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.PERMISSION_DENIED,
        useClass: GrpcExceptions.PermissionDeniedException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.RESOURCE_EXHAUSTED,
        useClass: GrpcExceptions.ResourceExhaustedException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.UNAUTHENTICATED,
        useClass: GrpcExceptions.UnauthenticatedException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.UNAVAILABLE,
        useClass: GrpcExceptions.UnavailableException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.UNIMPLEMENTED,
        useClass: GrpcExceptions.UnimplementedException,
    },
    {
        provide: ERROR_PROVIDER_TOKENS.UNKNOWN,
        useClass: GrpcExceptions.UnknownException,
    },
];

@Module({
    providers: [...providers],
    exports: [...providers],
})
export class GrpcExceptionsModule {}
