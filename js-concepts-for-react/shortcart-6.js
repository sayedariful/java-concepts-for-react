// true: 'arifu', 4, true, {}, [],
// false: '', 0, false, null, undefined
// check truthy
let myVar = 5;
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}
// console.log(myVar);
// =============================
let myMoney = 50;
if (!myMoney) {
}
// ========================
const money = 80;
let food;
if (money > 100) {
  food = "biryani";
} else {
  food = "cha kahbo";
}
// console.log(food);

// ==============================
// ternary
let food1 = money < 100 ? "bieyani" : "cha khabo";
// console.log(food1);
// ternary
let food2 = money > 100 ? "bieyani" : "cha khabo";
// console.log(food2);
// ===================

let drink = money > 100 && myVar > 100 ? "coke" : "filter water";
// console.log(drink)

// number to string conversion
const num1 = 50;
// console.log(num1);
const numStr = num1 + " ";
// console.log(numStr);

// string to number conversion
const input = "500";
// console.log(input);
const output = +input;
// console.log(output);

//
const isActive = true;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User");
// isActive ? showUser() : hideUser();
// =========================
const isActive1 = false;
const showUser1 = () => console.log("display User");
const hideUser1 = () => console.log("hide User");
// isActive1 ? showUser1() : hideUser1();
isActive1 && showUser1();
// use ||
isActive1 ||hideUser1();

// toggle
isActive1 = !isActive1;
