/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/
const arNum = [1, 5, -7, "A", true, 99];
console.log("количество элементов - " + arNum.length);

arNum.forEach(function (item, index, array) {
  index = index + 1;
  console.log("элемент №" + index + " - " + item);
});
