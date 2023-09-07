// 1. JSON => stringify / parse
const student = {
  name: "Ariful",
  age: 34,
  id: 21,
  address: ["chapai", "shibgongj", "ranihati"],
};
//   object theke stringify conver
const studentJson = JSON.stringify(student);
//   console.log(student);
//   console.log(studentJson);

//   stringify theke object convert
const studentObject = JSON.parse(studentJson);
//   console.log(studentObject);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

//   object, keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [43, 56, 56, 76, 89];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//For arrays like objects
// অবজেক্টের মতো অ্যারের জন্য
// loop on an object using for in
// in ব্যবহার করে একটি বস্তুর উপর লুপ করুন

// add or remove form an array
// অ্যাড বা রিমুভ ফর্মে যান

const products = [
  { name: "Laptop", price: 32000, brand: "lenovo", color: "black" },
  { name: "Phone", price: 14000, brand: "vivo", color: "golden" },
  { name: "Led", price: 20000, brand: "esonic", color: "black" },
  { name: "watch", price: 2000, brand: "casio", color: "black" },
  { name: "Sunglass", price: 3000, brand: "ribon", color: "silver" },
  { name: "Bluetooth", price: 200, brand: "m10", color: "black" },
];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };

// copy products array and add newProduct
// পণ্য অ্যারে অনুলিপি করুন এবং নতুন পণ্য যোগ করুন
const newProducts = [...products, newProduct];

// create a new array without one specific item
// একটি নির্দিষ্ট আইটেম ছাড়া একটি নতুন অ্যারে তৈরি করুন
// remove phone means create a new array without the phone
// ফোন রিমুভ করা মানে ফোন ছাড়াই একটি নতুন অ্যারে তৈরি করা

const remaining = products.filter(p => p.name !== 'phone');