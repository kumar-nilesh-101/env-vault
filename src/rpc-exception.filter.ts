import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseGrpcException } from './grpc-exceptions/exceptions/BaseGrpcException.factory';
import { throwError } from 'rxjs';

@Catch()
export class GrpcExceptionFilter implements ExceptionFilter<BaseGrpcException> {
    catch(exception: BaseGrpcException, host: ArgumentsHost) {
        return throwError(() => exception.getError());
    }
}
