/*Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.*/
const arr = [5, 5, 5, 5, 9, 5, 5];
let i = 0;
let result = 0;
while (i < arr.length - 1) {
  if (arr[i] === arr[arr.length - 1]) {
    i = i + 1;
    result = true;
  } else {
    result = false;
    i = arr.length;
  }
}
if (result === true) {
  console.log("Элементы в массиве одинаковые");
} else {
  console.log("Элементы в массиве не одинаковые");
}
