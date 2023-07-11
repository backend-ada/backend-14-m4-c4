export function parseArguments(args: any): Array<number> {              // number[] == Array<number>

    if(args.length !== 5) throw new Error('Wrong number of arguments');
    
    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if(!isNaN(firstNumber) && !isNaN(firstNumber)) return [firstNumber, secondNumber];
    
    throw new Error('Provided values were not numbers...');
}