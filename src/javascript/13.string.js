// Есть три типа кавычек. Строки, использующие обратные кавычки,
// могут занимать более одной строки в коде и включать выражения ${…}

// Строки в JavaScript кодируются в UTF-16.
// Есть специальные символы, такие как разрыв строки \n

// Доступ к символам
let str = "Hello";
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.at(0));
console.log(str.at(-1));

//Строки неизменяемы
//Изменение регистра
let str1 = "Interface";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//Поиск подстроки str.indexOf(substr,pos) ищет подстроку substr в строке str, начиная с позиции pos
//и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений

let str2 = "Widget with id";
console.log(str2.indexOf("id", 3));

// includes startsWith endsWith
console.log(str2.includes("with"));
console.log(str2.startsWith("Widget w"));
console.log(str2.endsWith(" id"));

// Получение подстроки
// slice(start, end)

let str3 = "stringify";
console.log(str3.slice(0, 3));
console.log(str3.slice(-6, -3));

//substring(start, end) отрицательные значения равнозначны 0
console.log(str3.substring(6, 2));
console.log(str3.substring(2, 6));

//substr(start, length)
console.log(str3.substr(2, 4));
console.log(str3.substr(-5, 3));

// Сравнение строк
// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:

console.log("z".codePointAt(0));
console.log("Z".codePointAt(0));
