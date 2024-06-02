import { Catch, ExceptionFilter } from '@nestjs/common';
import { throwError } from 'rxjs';
import { BaseGrpcException } from 'src/exceptions/BaseGrpcException.factory';

@Catch(BaseGrpcException)
export class GrpcExceptionFilter implements ExceptionFilter<BaseGrpcException> {
    catch(exception: BaseGrpcException) {
        return throwError(() => exception.getError());
    }
}
