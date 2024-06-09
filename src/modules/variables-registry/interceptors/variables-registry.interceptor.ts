import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import { NotFoundException, UnknownException } from 'src/exceptions/grpc';
import { DeleteResult } from 'typeorm';
import { ResponseTransformer } from '../response-transformer';

@Injectable()
export class VariablesRegistryInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((res) => {
                if (res === null) {
                    throw new NotFoundException('Data not found');
                }

                if (res instanceof DeleteResult && res.affected === 0) {
                    throw new UnknownException('Key not found');
                }

                return new ResponseTransformer().transform(
                    context.getHandler().name,
                    res,
                );
            }),
            catchError((err) => throwError(() => err)),
        );
    }
}
