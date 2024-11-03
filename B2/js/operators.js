// 1. Toan tu so hoc (Arithmetic) (+-*/%) ---------------------
// var a = 12 ** 2; // luy thua
// console.log(a); // 144

// *** 1. tien to (prefix) (++a, --a)
// console.log(++a); // 145
// console.log(a); // 145

// *** 2. hau to (postfix) (a++, a--)
// a = a + 1 -> a += 1/ a++
// console.log(a++); // 144
// console.log(a); // 145

// console.log(12 % 2); // chia lay phan du
// console.log(13 / 2); // 6.5

// 2. Toan tu gan (Assignment) (= -= += *= /= **=) -------------
// var x = 10;
// x += 100; // x = x + 100;

// 3. Toan tu so sanh (Comparison) (> < >= <= != == ===) -------------
//  return -> boolean (true - false)
/**
 * 6 kieu du lieu -> convert bool -> false (con lai deu tra ve true)
 * 0
 * false
 * chuoi rong "" / ''
 * undefined
 * null
 * NaN
 */
// const arr = []; // {} " " "0"
// if (arr) console.log("abc");
// else console.log("xyz");

// nhap ten 1 nguoi -> neu khong nhap -> bat nhap tiep
// const full_name = prompt("Your name: ");
// // template string ` ... ${}`
// if (full_name) console.log(`Your name is ${full_name}`);
// else console.error("Can nhap ten");

// 4. Toan tu logic (|| && !) ----------------------------------
// *** and: tra ve gia tri ve phai trong bieu thuc
// var result = "A" && "B" && "C";
// console.log("result", result); // "C"
// and gap gia tri khac 6 gia tri false -> gan ket qua: gia tri ve phai
// var result = null && "B" && "C";
// console.log("result", result); // null

// *** or: tra ve gia tri khac 6 gia tri tren/ tra ve ve trai
// var result = "A" || "B" || "C";
// console.log("result", result); // "A"
// neu ca 2 ve -> gia tri tra ve false -> lay cai cuoi
// var result = undefined || null || "B" || NaN;
// console.log("result", result); // "B"

// *** not: tra ve phu dinh
// var result = !("" && 0 && "A"); // true
// var result = !(false && false) || true; // true
