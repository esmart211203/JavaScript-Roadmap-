// Variable Declarations
/**
 * - Var variable: phạm vi hoạt động là FUNCTION SCOPE, không nên dùng trong for sẽ bị REDECLARED, dễ bị thay đổi.
 * - Let variable: var thì luôn là function scope, còn let là block scope. Let không bị REDECLARED trong for,(nếu khai báo và gán
 * giá trị 2 lần cho 1 biến var trong block scope thì giá trị sẽ bị thay đổi trong đối với let làm tương tự sẽ lỗi "syntax error").
 * - Const variable: giống như let phạm vi hoạt động của const là block scope, vì là hằng nên giá trị không bị thay đổi nếu cố gán giá trị
 * khác cho biến đó nếu cố gắng gán 1 giá trị khác sẽ lỗi "Uncaught TypeError: Assignment to constant variable.", tuy nhiên nếu gán
 * const như 1 object thì atributes có thể bị thay đổi
 * - Biến: chúng có thể chứa bất cứ thứ gì không chỉ là chuỗi và số, các biến cũng có thể chứa các dữ liệu phức tạp thậm chí là hàm.
 */
/**
 *                                  KẾT LUẬN
 *       ~~~~                var                let                const
 *     -----------------------------------------------------------------
 *     global scope          YES                NO                  NO
 *     function scope        YES                YES                 YES
 *     block scope           NO                 YES                 YES
 *     can be REDECLARED     YES                YES                 NO
 */

// var
var varGirl = "Mặt em là mặt mộc";
function after_tay_trang() {
  var varGirl = "Đây là ai?, tao ở đâu?, con nào đang đứng trước gương thế này";

  console.log(varGirl);
}
after_tay_trang(); // output: Đây là ai?, tao ở đâu?, con nào đang đứng trước gương thế này
console.log(varGirl); // output: Mặt em là mặt mộc

// let
// Scope của window (globally).
let MrJokes = "yeuemA";
let check = true;
if (check) {
  // Scope của block (trong phạm vi {})
  let MrJokes = "yeuemB"; // Trẻ hơn
}
console.log(MrJokes);
/*
function vongMotSizeBaoNhieu() {
  let a = 60;
  let a = 90; //throws syntax error
  console.log(a);
  // Của trời cho, không to lên được.
}
*/

// const
const emTrongkotD = {
  age: 20,
  name: "Trong",
  sex: "Nam",
};

emTrongkotD.age = 21;
console.log(emTrongkotD);
