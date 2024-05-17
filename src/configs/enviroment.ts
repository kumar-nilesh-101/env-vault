import { IsDefined, IsString, IsUrl } from 'class-validator';

export class EnvConfig {
    @IsDefined()
    @IsString()
    PROTO_PACKAGE: string;

    @IsDefined()
    @IsString()
    PROTO_PATH: string;

    @IsDefined()
    @IsUrl()
    MS_URL: string;

    @IsDefined()
    @IsString()
    FILE_PATH: string;
}
