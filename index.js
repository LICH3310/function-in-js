// Задание 1: Простая функция

// 1. Напишите функцию `greet`, которая выводит в консоль сообщение `"Привет, мир!"`.
// 2. Вызовите эту функцию.

// function greet() {
//   console.log("Привет, мир!");
// }

// greet();

// Задание 2: Функция с параметрами

// 1. Создайте функцию `sayHello`, которая принимает один параметр — имя пользователя.
// 2. Функция должна выводить сообщение вида `"Привет, [имя]!"`.
// 3. Вызовите функцию с разными именами.

// let muName = "Ilya";

// function sayHello(userName) {
//   alert("Привет, " + userName + "!");
// }
// sayHello(muName);

// Задание 3: Функция с возвращаемым значением

// 1. Напишите функцию `sum`, которая принимает два числа и возвращает их сумму.
// 2. Вызовите функцию и выведите результат в консоль.

// function sum(a, b) {
//   return console.log(a + b);
// }
// sum(10, 13);

// Задание 4: Функция с проверкой на чётность

// 1. Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false` — если нечетное.
// 2. Вызовите функцию для нескольких чисел и выведите результаты.
// function isEven(a) {
//   if (a % 2 == 0) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }

// isEven(2);

// Задание 5: Функция с несколькими параметрами и условием

// 1. Напишите функцию `max`, которая принимает два числа и возвращает большее из них.
// 2. Если числа равны, функция должна возвращать `"Числа равны"`.

// let numberA = Number(prompt());
// let numberB = Number(prompt());

// function max(a, b) {
//   if (a > b) {
//     return console.log(a);
//   } else if (a < b) {
//     return console.log(b);
//   } else if (a == b) {
//     return console.log("Числа равны");
//   } else if (isNaN(a) || isNaN(b) || a == NaN || b == NaN) {
//     return console.log("вы ввели не коректные данные для сравнения");
//   }
// }

// max(numberA, numberB);

// Задание 6: Функция для работы со строками

// 1. Напишите функцию `getInitials`, которая принимает имя и фамилию в виде двух строк и возвращает инициалы (например, для `"Алиса Боброва"` функция должна вернуть `"А.Б."`).
// 2. Проверьте работу функции с разными именами.

// let name = String(prompt("введите ваше имя"));
// let surname = String(prompt("введите вашу фамилию"));

// function getInitials(a, b) {
//   return console.log(a[0] + "." + b[0]);
// }

// getInitials(name, surname);

// Задание 8: Стрелочная функция
// 1. Перепишите функцию из задания 3 (`sum`) в виде стрелочной функции.

// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(2, 13);

// Задание 7: Функция с вложенными вызовами

// 1. Напишите функцию `square`, которая принимает число и возвращает его квадрат.
// 2. Напишите функцию `cube`, которая принимает число и возвращает его куб.

// let sum = Number(prompt());

// function square(square) {
//   return console.log(square * square);
// }
// function cube(cube) {
//   return console.log(cube * cube * cube);
// }
// square(sum);
// cube(sum);
// 3. Используйте функцию `square` внутри функции `cube` для нахождения куба числа.
// let sum = Number(prompt());

// function square(square) {
//   return square * square;
// }
// function cube(cube) {
//   console.log(square(cube) + " квадрат числа " + sum);
//   return console.log(square(cube) * cube + " куб числа " + sum);
// }
// square(sum);
// cube(sum);

//
