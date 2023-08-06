// Function Declaration
function showPrimes(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    arr.push(i);
  }
  return arr;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    let rem = num % i;
    if (!rem) {
      return false;
    }
  }
  return true;
}

// console.log(showPrimes(150));

// Function Expression

const sayHi = function (name, text) {
  console.log(`${name}: ${text}`);
};

sayHi("Aisultan", "Hello brother");

// Arrow Function

const baia = (name = "baiakhmet") => {
  console.log(`My name is ${name}`);
};

baia();

//   Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
//   Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
//   Если функция была создана как часть выражения, то это “Function Expression”.
//   Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
//   Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.
