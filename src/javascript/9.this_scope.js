//
const obj = {
  name: "Baiakhmet",
  surname: "Zhekeyev",
  sayHi: function () {
    console.log(`Hello my name is ${this.name} and surname is ${this.surname}`);
  },
};

obj.sayHi();

//   Функции, которые находятся в свойствах объекта, называются «методами».
//   Методы позволяют объектам «действовать»: object.doSomething().
//   Методы могут ссылаться на объект через this.
