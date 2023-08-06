const bil1 = 1000000;
const bil2 = 1e6;
const ms = 1e-6;

console.log(bil1);
console.log(bil2);
console.log(ms);

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255
let c = 0xff; // шестнадцатеричные форма записи числа 255

console.log(a == b);
console.log(a == c);
console.log(b == c);

// toString(base)

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log((255).toString(2)); // 11111111

// округление

// Math.floor Округление в меньшую сторону:
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(-1.1)); // -2

// Math.ceil округление в большую сторону
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.1)); // -1

// Math.round округлние до ближайшего целого
console.log(Math.round(3.1)); // 3
console.log(Math.round(-1.1)); // -1

// Math.trunc удаление дробной части без округления
console.log(Math.trunc(3.6)); // 3
console.log(Math.trunc(-1.1)); // -1

// toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
let numfix = 12.36;
console.log(numfix.toFixed(1)); // 12.4

// неточные вычисления
let num2 = 0.1 + 0.2;
let num3 = 0.3;

console.log(num2 == num3); //false
// Можно ли обойти проблему? Конечно, наиболее надёжный способ —
// это округлить результат используя метод toFixed(n):

//isFinite isNaN
isNaN(NaN); // true
isNaN("str"); // true
console.log(NaN === NaN); // false

isFinite("15"); // true
isFinite("str"); // false
isFinite(Infinity); // false

//parseInt parseFloat

console.log(parseInt("100px1")); // 100
console.log(parseFloat("100.112px1")); //100.112
console.log(parseInt("12.3")); // 12
console.log(parseFloat("12.3.4.5")); // 12.3

// parseInt(str, radix)

console.log(parseInt("0xff", 16)); // 255;

// Math

console.log(Math.random());
console.log(Math.min(1, 2, 5, 8, 413, 15, 23, -5, 564));
console.log(Math.max(1, 2, 5, 8, 413, 15, 23, -5));
console.log(Math.pow(2, 10));
