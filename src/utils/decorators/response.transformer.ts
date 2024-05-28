export function TransformResponse(transformer: any) {
    return function (
        target: any,
        key: string | symbol,
        descriptor: PropertyDescriptor,
    ) {
        const originalImplementation = descriptor.value;
        const transformerImplementation = async function (...args: any[]) {
            const returnValue = await originalImplementation.apply(this, args);
            return transformer(returnValue);
        };
        descriptor.value = transformerImplementation;
        return descriptor;
    };
}
