/**
 * Data types
 * Trong Javascript có các kiểu data types sau: string, number, boolean, object, array, date, function
 */

// Numbers types
let minAge = 16;
let maxAge = 21;

// String types
let firstName = "Trong";
let lastName = "Do";

// Boolean types
let isOk = true;
let isBad = false;

// Object types
/**
 * có thể lấy giá trị của object bằng 2 cách
 * + objectName.property
 * + objectName["property"]
 * + objectName[expression]
 */
let userObject = {
  firstName: firstName,
  lastName: lastName,
  age: minAge,
  is_ok: isOk,
  is_bad: isBad,
  myCars: {
    car1: "Xe đạp",
    car2: "Xe máy",
    car3: "Xe căng hải",
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("userObject :", userObject);
console.log("Get cars: ", userObject.myCars);
console.log("Get full name: ", userObject.fullName().toUpperCase());
document.getElementById("root").innerHTML =
  "Xin chào" + userObject.fullName().toUpperCase();
// Array types
let favoriteArr = ["football", "con khùng đó"];

// Date types - YYYY-MM-DD

let birthDate = new Date("2003-12-21");

// Undefined types
let a; // undefined

// Decimal types
let diemTrungBinh = 9.5;
console.log(diemTrungBinh);
/////////////// DEMO /////////////////
/*
  - JavaScript tính các biểu thức từ trái sang phải, trình tự khác nhau có thể tạo kết quả khác nhau
  let x = 16 + 4 + 'TrongKotD'; //target: 20TrongKotd

*/
