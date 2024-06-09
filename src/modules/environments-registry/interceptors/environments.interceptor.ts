import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { NotFoundException, UnknownException } from 'src/exceptions/grpc';
import { DeleteResult } from 'typeorm';
import { ResponseTransformer } from '../response-transformer';

@Injectable()
export class EnvironmentsInterceptor implements NestInterceptor {
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
        );
    }
}
