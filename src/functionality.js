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

function capitalize(str){
  return  String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
console.log(capitalize("amazon"));
