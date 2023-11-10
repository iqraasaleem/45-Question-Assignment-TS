import chalk from "chalk";
import { log } from "console";

let name : string = "\t Iqra Saleem \n";
console.log(`${chalk.bold.bgGreen("name with whitespace:")},${name}`);

let nameWithoutSpace = name.trim();
console.log(`${chalk.bold.bgGreen("removal of white space:")}, ${nameWithoutSpace}`);
