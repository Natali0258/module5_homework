/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/
//вариант 1:
const str = "Hello";
let numLetters = 0;
let letter = "";
let result = "";
for (let i = 1; numLetters >= 0; i = i + 1) {
  numLetters = str.length - i;
  letter = str.slice(numLetters, numLetters + 1);
  result = result + letter;
}
console.log(result);

//вариант 2:
let Hi = "Hello";
function reverse(Hi) {
  return Hi.split("").reverse().join("");
}
Hi = reverse(Hi);
console.log(Hi);
