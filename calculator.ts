export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculate(a: number, b: number, operation: Operation): number {

    if(operation == 'add') return a + b;

    if(operation == 'subtract') return a - b;

    if(operation == 'multiply') return a * b;

    if(operation == 'divide') {
        if(b == 0) throw new Error('¡Can not divide by 0');
        return a / b;
    }

    throw new Error('Operation is not valid');
}