const name = "hitesh"
const repoCount = 50

// console.log{name + remoCount + " Value"}; => this is not proper method to write a code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //=> proper writting code


const gameName = new String('candy-crash-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    arpit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arpit.com/arpit%20ghorpade";

console.log(url.replace('%20', '-'));

console.log(url.includes('arpit'));

console.log(gameName.split('-'));



