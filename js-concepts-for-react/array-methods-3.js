const products = [
  { name: "Laptop", price: 32000, brand: "lenovo", color: "black" },
  { name: "Phone", price: 14000, brand: "vivo", color: "golden" },
  { name: "Led", price: 20000, brand: "esonic", color: "black" },
  { name: "watch", price: 2000, brand: "casio", color: "black" },
  { name: "Sunglass", price: 3000, brand: "ribon", color: "silver" },
  { name: "Bluetooth", price: 200, brand: "m10", color: "black" },
];

// 1. return
const brands = products.map((product) => product.brand);
// console.log(brands);

const prices = products.map((product) => product.price);
// console.log(prices);

// 2. forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.name));

products.forEach((product) => {});

// 3. filter
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

//
const specificName = products.filter((product) => product.name.includes("n"));
// console.log(specificName);

// 4. find
const special = products.find(product => product.name.includes("n"));
console.log(special);