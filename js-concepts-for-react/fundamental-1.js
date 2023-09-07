// 1. conditions jantei hobe
// 1. how to declare a variable using let and const
// const  etar man change hobena
// let- etar man change hobe

// 2. conditions jantei hobe
// 6 basic conditions: - >, <, =>, =<, ===, !==
// multiple conditions: &&, ||

// 1. how to declare a variable using let and const
const fatherName = "Amir Ali";
let season = "Ariful";
season = "winter";

if (fatherName === "amir Ali" || season === "Ariful") {
} else if (fatherName === "amir Ali") {
} else {
}

// 3. array declare kora jantei hobe
// index 0 1 2 3  ai vabe shuru hoy
// .length diye koita elements ache ber kora jay
// push, pop, shift, unshift,
const numbers = [1, 2, 3];
numbers[0] = 50;

// 4: loop, forloop,
// loop ai vabe likhte hoy
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5: function
function multiply(num1, num1) {
  const result = num1 * num1;
  return result;
}
const output = multiply(35, 50);

// 6. object
// 3 ways to access properties of name
const student = {
  name: "Ariful",
  age: 34,
  id: 21,
  address: ["chapai", "shibgongj", "ranihati"],
};

// number 1
console.log(student.age, student.address, student.id);

// number-2
console.log(student["age"]);

// number 3
const myVariable = "age";
console.log(student[myVariable]);
