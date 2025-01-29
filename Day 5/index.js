/*console.log("Hello World");
console.log("The answer is "+42);
alert("Message!"); // Single Comment

 Variables

 let level = 23;
 let accuracy = 0.99;
// let name1 = "Pikachu";
let temp = [55, 60, 57, 5]; // Array

let isValid = "hello!";

const BEST_CLASS="CS3163";
BEST_CLASS="CS3213"; // ERROR

let credit = 5+4+(2*3);

// Strings

let name = "Andrew Dziwanowski";
let fName = name.substring(0,name.indexOf(" "));
let len = fName.length;
console.log(len);
*/
// Loops and Conditions

function mystery(a, b) {
    if (a>b){
        return 0;
    }
    else if(a == 1) {
        let result = 0;
        for (let i=a; i<=b; i++) {
            result+=i;
        }
        return result;

    }

}

console.log(mystery(4,6));

while(condition) {
    console.log("While loop");
}

do{
    statements;
}while(condition);

// == does not care about data type, === does care about data type

// arrays

let name = ["Earth", "Wind", "Fire"];
let array=[];
name[0] = "Hello";
name[2] = "My";

array.push("Dziwanowski"); // pushes in from the end
array.unshift("Hayden");
array.pop(); // delete last element
array.sort();



