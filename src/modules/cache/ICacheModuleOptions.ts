export interface CacheModuleOptions {
    imports: Array<any>;
    useFactory: (...args: any[]) => any | Promise<any>;
    inject: Array<any>;
}
