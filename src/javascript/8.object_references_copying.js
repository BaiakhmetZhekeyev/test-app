// Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти»
let a = {};
let b = a;
let c = {};

let res1 = a == b; //true
let res2 = a === b; //true

let res3 = a == c; //false
let res4 = a === c; //false

console.log(res1, res2, res3, res4);

// Клонирование

const obj = {
  name: "Baiakhmet",
  surname: "Zhekeyev",
  phone: 87784862705,
  age: 25,
};

const clone1 = {};
for (let key in obj) {
  clone1[key] = obj[key];
}

const clone2 = Object.assign({}, obj);
