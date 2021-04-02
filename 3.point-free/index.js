// point free

//getPerson(function onPerson(person) {
//return renderPerson(person) ;
//}) ;

//getPerson(renderPerson) ;
//
//
function isOdd(v) {
  return v % 2 == 1;
}

function isEven(v) {
  return !isOdd(v);
}
/// ex1
//function output(txt) {
//return console.log(txt);
//}

//function printIf(shouldPrintIt) {
//return function () {
//if (shouldPrintIt(msg)) {
//output(msg);
//}
//};
//}

//function isShortEnough(str) {
//return str.length <= 5;
//}

//function isLongEnough(str) {
//return !isShortEnough(str);
//}

//sol
const output = console.log.bind(console);
let printIf = when(output);
let isLongEnough = not(isShortEnough);
printIf(isLongEnough)("wq"); ////////  false
printIf(isLongEnough)("amir is here"); ////// true

function not(fn) {
  return function (...args) {
    return !fn(...args);
  };
}

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

function isShortEnough(str) {
  return str.length <= 5;
}

// advance ex

function eq(y) {
  return function forX(x) {
    return x === y;
  };
}

function mod(y) {
  return function forX(x) {
    return x % y;
  };
}

const eq1 = eq(1);
const mod2 = mod(2);
const isOddEx = (x) => eq1(mod2(x));

// solution

function eq(y) {
  return function forX(x) {
    return x === y;
  };
}

function mod(y) {
  return function forX(x) {
    return x % y;
  };
}

function compose(fn1, fn2) {
  return function (value) {
    return fn1(fn2(value));
  };
}

const isOddSol = compose(eq(1), mod(2));

output(isOddSol(544));
output(isOddSol(53));
