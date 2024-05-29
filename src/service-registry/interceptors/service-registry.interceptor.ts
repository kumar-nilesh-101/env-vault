import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ResponseTransformerFactory } from '../response-transformer.factory';

@Injectable()
export class ServiceRegistryInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        context.getHandler().name;
        return next
            .handle()
            .pipe(
                map((res) =>
                    new ResponseTransformerFactory().transform(
                        context.getHandler().name,
                        res,
                    ),
                ),
            );
    }
}
