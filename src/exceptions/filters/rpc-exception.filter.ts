import { Catch, ExceptionFilter } from '@nestjs/common';
import { BaseGrpcException } from '../grpc/BaseGrpcException.factory';
import { throwError } from 'rxjs';

@Catch(BaseGrpcException)
export class GrpcExceptionFilter implements ExceptionFilter<BaseGrpcException> {
    catch(exception: BaseGrpcException) {
        return throwError(() => exception.getError());
    }
}
