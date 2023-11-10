// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
const string1 = "iqra saleem";
const string2 = "Iqra Saleem";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// • Tests using the lower case function
const text1 = "Rubab Majeed";
const text2 = "rubab majeed";
console.log(text1.toLocaleLowerCase() === text2); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 15;
const num2 = 6;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
// • Tests using "and" and "or" operators
const c = 5;
const d = 10;
const e = 15;
console.log(c < d && d < e); // true both
// condition are true
console.log(c < d || d > e); // true atleast one
// condition is true
console.log(c > d && d < e); // false both
// condition are false
console.log(c > d || d > e); // false both
// condition are false
// • Test whether an item is in a array
const fruits = ['apple', 'banana', 'grape'];
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('kiwi')); //false
// • Test whether an item is not in a array
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(!colors.includes('purple')); //true
console.log(!colors.includes('green')); //false
export {};
