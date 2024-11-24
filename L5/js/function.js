// khai bao function -------------------------------------------

// cach 1: function co ten
// ham sum: param : a, b => return a + b
function sum(a, b) {
  return a + b;
}

// goi lai ham de thuc thi
console.log(sum(1, 3));

// cach 2: function khong ten/ an danh
const sum_2 = function (a, b) {
  return a + b;
};
console.log(sum_2(1, 2));

// ham hello (ham k ten): truyen tham so name -> clg: "Hello " + name
const hello = function (name) {
  console.log("Hello " + name);
};
// khong return -> in ra gia tri: undefined
console.log(hello("diep"));

// luu gia tri key:value
// neu value khac kieu du lieu string
// => khong hien thi duoc
localStorage.setItem("name", {});

// mo dev tool -> application tab -> local storage 
// -> mo muc -> domain (url) trang hien tai -> kiem tra

// lay gia tri (value) du lieu thong qua key
console.log(localStorage.getItem("name"));

