import { calculate, Operation } from "./calculator";
import { parseArguments } from "./args-parser";

(function main() {

    const args = parseArguments(process.argv);
    const operation = process.argv[4] as Operation;
    const result = calculate(args[0], args[1], operation);
    console.log(result);
})();

