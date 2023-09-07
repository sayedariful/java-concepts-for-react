const numbers = [51, 54, 85, 20];
const student = {
  name: "Ariful",
  age: 34,
  id: 21,
  address: ["chapai", "shibgongj", "ranihati"],
};

// 1.  template string jantei hobe
const about = `My name is ${student.name} Age of ${student.age} has number ${numbers[2]} also liked address ${student.address[0]}`;

console.log(about);

// 2. arrow function
const getFiftyFive = () => 35;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const multiLine = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// spread operator
const newNumbers = [...numbers];
numbers.push(33);
numbers.push(33);
numbers.push(33);
numbers.push(33);


// একটি পুরানো অ্যারে তৈরি করে একটি নতুন অ্যারে তৈরি করুন এবং একটি উপাদান যোগ করুন
const currentNumbers = [...numbers, 55]

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);