import { Catch, ExceptionFilter } from '@nestjs/common';
import { throwError } from 'rxjs';
import { SqlExceptionFactory } from '../typeorm-sql/sql-exception.factory';
import { QueryError } from 'mysql2';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class SqlExceptionFilter
    implements ExceptionFilter<QueryFailedError<QueryError>>
{
    catch(exception: QueryFailedError<QueryError>) {
        return throwError(() =>
            new SqlExceptionFactory(exception).grpcException.getError(),
        );
    }
}
