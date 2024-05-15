/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    //Codeblock
    return a +b;
}
let result = addTwoNumbers(3,5);
console.log(result);

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    //Codeblock
    return a +b;
}
let result1 = addTwoNumbers(3,5);
console.log(result1);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a+b;
let sum = addTwoNumbers2(4,6);
console.log(sum);

// Implicit Returns
const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
const returnMultiplyLines = () => (
    `<p>
    This is a function with more lines
    </p>`
)
console.log(returnMultiplyLines());
