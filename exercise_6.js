import chalk from "chalk";
let name = "\t Iqra Saleem \n";
console.log(`${chalk.bold.bgGreen("name with whitespace:")},${name}`);
let nameWithoutSpace = name.trim();
console.log(`${chalk.bold.bgGreen("removal of white space:")}, ${nameWithoutSpace}`);
