// input, output -------------------------
// alert("This is notification!");
// const full_name = prompt("Nhap ten cua ban");
// console.log(typeof full_name);
// const is_human = confirm("Are you human?");
// console.log(is_human);

// variable (scope) ------------------------
// *** var
// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }

// console.log(index); // 10

// ***let
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// console.log(index); // error (is not defined)

// *** const
// const object = { name: "abc", age: 15 };
// // object -= {} // error (is constant var)
// object.name = "xyz";
// console.table(object);

// builtin (set timeout, set interval) ------------------
// *** set timeout ***
// way 1
// setTimeout(() => {
//   // arrow function
//   document.write("<h1>Hello 123</h1>");
// }, 1000);

// // way 2
// function say_hello() {
//   console.warn("Hello friend!");
// }
// setTimeout(say_hello, 1000);

// *** set interval ***
// const id = setInterval(() => {
//   // HTML dom
//   document.getElementsByTagName("body")[0]
//   .innerHTML += "<h1>Hello</h1>";
// }, 1000);

// const id2 = setInterval(() => {
//   // HTML dom
//   document.getElementsByTagName("body")[0]
//   .innerText += "\nbye";
// }, 1000);

// // // sau 5 lan chay -> dung lai
// setTimeout(() => {
//   clearInterval(id);
//   //   callback function
//   setTimeout(() => {
//     clearInterval(id2);
//   }, 5000);
// }, 5000);
