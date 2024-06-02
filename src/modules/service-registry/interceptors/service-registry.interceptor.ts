import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ResponseTransformer } from '../response-transformer';
import { NotFoundException, UnknownException } from 'src/exceptions/grpc';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ServiceRegistryInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        context.getHandler().name;
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
