// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

// const [x, y] = numbers;

function getValue(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 34];
const [first, second] = getValue(90, 34);
// console.log(getValue(90, 34));

const student = {
  name: "Ariful",
  age: 34,
  id: 21,
  address: ["chapai", "shibgongj", "ranihati"],
};
const [firstAddress, secondAddress] = student.address;

// object destructuring
const { name, age } = { name: "alu", age: 34 };
// const { name, age } = { id: 12, name: "alu", age: 34 };

const employee = {
  id: "Vs Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 67,
    weight: 74,
    address: "ranihati",
    drink: "water",
    watch: {
        color: 'black',
        price: 500,
        brand: 'Apple',
    }
  },
};
const {machine, id} = employee;
const {weight, address} = employee?.specification;
const {brand} = employee?.specification?.watch;
