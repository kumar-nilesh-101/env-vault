import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ResponseTransformer } from '../response-transformer';

@Injectable()
export class ServiceRegistryInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        context.getHandler().name;
        return next
            .handle()
            .pipe(
                map((res) =>
                    new ResponseTransformer().transform(
                        context.getHandler().name,
                        res,
                    ),
                ),
            )
            .pipe(catchError((err) => throwError(() => err)));
    }
}
