
//Задание 1

let number = prompt("Введите число");
if (number === "" || isNaN(number)) {
  console.log("Упс, кажется, вы ошиблись, введите число")
} else if (number % 2 ===0) {
    console.log("Число четное")
} else {
    console.log("Число нечетное")
}

//Задание 2.

let x = false
if (typeof (x) === "string") {
  console.log('строка')
} else if (typeof (x) === "number") {
  console.log("число")
} else if (typeof (x) === "boolean") {
  console.log('логика')
} else {
  console.log('Тип x не определён')
}

//Задание 3
let str = "Hello"
let reverse = str.split('').reverse().join('')
console.log(reverse)

//Задание 4

let randomNumber=Math.floor(Math.random() * 101)
console.log(randomNumber)

//Задание 5

let nums = [1, 'Банан' , 2 , false];
console.log(nums.length);
nums.forEach(function(item, index, array) {
  console.log(item);
});

/*

Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 

*/

//Задание 8

let map = new Map();
map.set(1,2);
map.set("1","2");
map.set(true,false);

for (let name of map.keys()) {
  console.log("Ключ -", name)
}
for (let name of map.values()) {
  console.log("Значение -", name)
}