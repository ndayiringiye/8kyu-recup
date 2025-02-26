
const greeting = "hello world";
console.log(greeting);

function FindSum(a, b) {
    return a * b;
}
console.log(FindSum(5, 5))

// q3

for (let i = 1; i <= 10; i++) {
    console.log(i)
};

// checking odd

function isOdd(n) {
    return (n % 2 === 0 ? "true" : "false");
};
console.log(isOdd(100));

function convertingStringIntoNumber(num) {
    const integerNumber = Math.floor(num);
    return integerNumber;
};
console.log(convertingStringIntoNumber("456"));

function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
console.log(capitalize("amazon"));

let a = 5;
while (a >= 1) {
    console.log(a)
    a--

};

const age = 34;
if (age >= 18) {
    console.log("adult")
} else {
    console.log("minor")
};

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(["good afternoon teacher", "the day how was it going", "what you decide to achieve it for today"]));

const colors = ["red", "blue", "green"];
const removeArr = colors.pop();
console.log(colors);

function removeVowels(strings) {
    const vowels = ["a", "e", "i", "o", "u"];
    const result = strings.split("").filter(char => !vowels.includes(char.toLowerCase())).join("");
    return result;
}

console.log(removeVowels("your welcame programming life and always gain much money"));

const person = {
    name: "david",
    age: "100",
    city: "calfonia",
};

console.log(person)
function sumAArr(arrNu) {
    const sum = arrNu.reduce((a, b) => a + b);
    return sum
}
console.log(sumAArr([23, 45, 67, 89]));

function isPalindrome(strs) {
    const findPar = strs.split("").reverse().join(""); 
    return findPar === strs ? "true" : "false"; 
}

console.log(isPalindrome("igi")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("madam")); 
