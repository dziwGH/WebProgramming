function even(num){
    return num % 2 == 0; 
}

function odd(num) {
    return Math.abs(num % 2) == 1; // Again modulus for the remainder, using absolute to get 1 left as otherwise it will be a decimal.
}



console.log(odd(2));

function reverseString(string) {
    return string.split("").reverse().join("");
}

let str = "Dziwanowski";
let reversed = reverseString(str);
console.log(reversed);

let button = document.getElementById("changeColor");
let paragraph = document.getElementById("example");
console.log(button);
console.log(paragraph);
button.addEventListener("click", function () {
    paragraph.style.backgroundColor = "red";
});

let numbers = [1, 3, 78,0, 12345]

function maxVal(maxNum) {
    for (let i = 0; i <4; i++) {
        if (maxNum[i] > maxNum[i+1]) {
            let maximumNum = maxNum[i]
        }
    }
    return maximumNum;
}

console.log(maxVal(numbers));

