// init

const obj1 = new Object();
const obj2 = {};

// key: value
const obj3 = {
  name: "Baiakhmet",
  surname: "Zhekeyev",
  "likes birds": true,
};

console.log(obj3.name);
console.log(obj3.surname);
console.log(obj3["likes birds"]);

// delete

delete obj3["likes birds"];
console.log(obj3);
delete obj3.name;
console.log(obj3);

//computed properties

let fruit = "apple";

let obj4 = {
  [fruit]: 250,
};

console.log(obj4.apple);

// Свойство из переменной
function makeUser1(name, age) {
  return {
    name: name,
    age: age,
  };
}
function makeUser2(name, age) {
  return {
    name,
    age,
  };
}

const user1 = makeUser1("Aisultan", 25);
const user2 = makeUser2("Aisultan", 25);

console.log(user1);
console.log(user2);

// Проверка существования свойства, оператор «in»
console.log("name" in user1);
console.log("fullname" in user1);

// Цикл "for..in"

const obj5 = {
  name: "Baiakhmet",
  surname: "Zhekeyev",
  age: 25,
  profession: "Front-end Developer",
};

for (let key in obj5) {
  console.log(obj5[key]);
}

// Упорядочение свойств объекта

const obj6 = {
  49: "Германия",
  41: "Швецария",
  44: "Великобритания",
  1: "США",
};

for (let key in obj6) {
  console.log(key);
}

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
//  Они хранят свойства (пары ключ-значение), где:
//  Ключи свойств должны быть строками или символами (обычно строками).
//  Значения могут быть любого типа.
