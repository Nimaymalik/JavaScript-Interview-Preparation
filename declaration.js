const accountId = 2; // value not changable
let accountEmail = "nimay@gmail.com"; //block scope
var accountPass = "12345"; //function scope
let variable;
accountEmail = "nimay12@gmail.com";
accountPass = "123455";

console.table([accountId, accountEmail, accountPass,variable]);
