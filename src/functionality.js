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
