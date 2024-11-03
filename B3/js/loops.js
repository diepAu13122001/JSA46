// for - lap voi dieu kien dung ----------------------------------------------
/**
 * bao gom 3 doan ma khi viet vong for (khong can phai co du ca 3):
 * khai bao bien: chay 1 lan duy nhat khi chay loop
 * dieu kien dung => moi lan chay deu kiem lai
 * tang bien dem => moi lan chay deu thuc thi
 */
for (let index = 1; index < 101; index++) {
  console.log(`This is ${index} times`);
}

var i = 0;
for (; i < 100; ) {
  i++;
  console.log(i);
}

// duyet qua phan tu trong array
var arr = new Array(10); // danh sach rong
arr[0] = "a";
for (let index = 0; index < arr.length; index++) {
  console.log(index + 1, ":", arr[index]); // undefined
}

arr.forEach((item) => console.log(item));
