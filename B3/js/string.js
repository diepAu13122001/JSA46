// 2 cach khai bao
var firstName = "Diepp"; // type string
var lastName = new String("Au"); // type object

// neu 1 trong 2 ve khong phai number -> noi chuoi
// template string
// console.log(`Toi la: ${firstName} ${lastName}`);
// console.log(firstName + " " + lastName);

//back flash (\) chen ky tu dac biet
// console.log("Day la dau \n \t \\ ");

// do dai chuoi
// console.log(firstName.length);

// Ham ho tro
// 1. find index
// console.log(firstName.indexOf("w")); // -1
// console.log(firstName.search("D")); // 0
// console.log(firstName.lastIndexOf("p")); // 4

// 2. cat chuoi
// var subString = firstName.slice(0, -2); // "Die"

// 3. replace + replace all
// var replaceString = firstName.replace("D", "l");
// var replaceAllString = firstName.replaceAll("p", "w"); // way1
// var replaceAllString = firstName.replace(/p/g, "."); // way2

// 4. uppercase + lowercase
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// // 5. trim
// var str = "      ABC           ";
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// // 6. split (string -> array)
// var numbers = "1,2,3,4,5,6,7,8,9";
// console.log(numbers.split(",")); // -> array

// // 7. get a character by index
// // tra ve chuoi rong "" neu index > length
// console.log(firstName.charAt(15));
// // tra ve undefined neu index > length
// console.log(lastName[3]);
