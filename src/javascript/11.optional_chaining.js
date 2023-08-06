// Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.?

const user = {
  name: "Baiakhmet",
  surname: "Zhekeyev",
  age: 25,
};

// console.log(user.adress.street);  Error
console.log(user.adress?.street); // undefined

//   Синтаксис опциональной цепочки ?. имеет три формы:
//   obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
//   obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
//   obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
