export interface ITransformerFactory {
    transform(handlerName: string, response: any);
}
