// composition

//function minus2(x) {
//return x - 2;
//}

//function tripple(x) {
//return x * 2;
//}

//function increament(x) {
//return x + 1;
//}

//// ex- 1
//const basePrice = 744;
//let _tmp = increament(4);
//_tmp = tripple(_tmp);
//let totalPrice = basePrice + minus2(_tmp);

////solution - 1

//function shippingRate(x) {
//return minus2(tripple(increament(x)));
//}

//totalPrice = basePrice + shippingRate(4);

//sol 2
//function composeThree(fn1, fn2, fn3) {
//return fn1(fn2(fn3()));
//}

//function shippingRate(x) {
//return composeThree(minus2, tripple, increament)(x);
//}

/////////////////////////////////////composition

function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

function compose(...fns) {
  return pipe(...fns.reverse());
}

function pipe(...fns) {
  return function (v) {
    for (let fn of fns) {
      v = fn(v);
    }
    return v;
  };
}

const f1 = compose(increment, decrement);
const f2 = pipe(decrement, increment);
const f3 = compose(decrement, double, increment, half);
const f4 = pipe(half, increment, double, decrement);
const f5 = compose(increment);
const f6 = pipe(increment);

//////////

function sum(x, y) {
  return x + y;
}

function divBy(x, y) {
  return x / y;
}

function tripple(x) {
  return x * 3;
}

function composeThree(fn3, fn2, fn1) {
  return function (v) {
    return fn3(fn2(fn1(v)));
  };
}

function curry(fn, y) {
  return function (x) {
    return fn(x, y);
  };
}

const res = composeThree(tripple, curry(divBy, 2), curry(sum, 2))(8);

function mod(x, y) {
  return x % y;
}

function eq(x, y) {
  return x === y;
}

const isOdd = compose(curry(eq, 1), curry(mod, 2));

console.log("IS ODDDDDD", isOdd(45));
console.log("IS ODDDDDD", isOdd(2));






////////////////////////////////////// test cases
//describe("  >>>>> composition ", () => {
//test("compose and pipe f1 , f2  ", () => {
//expect(f1(3)).toBe(3);
//expect(f1(3)).toBe(f2(3));
//});

//test("compose and pipe f3 , f4  ", () => {
//expect(f3(3)).toBe(4);
//expect(f3(3)).toBe(f4(3));
//});

//test("compose and pipe f5 , f6  ", () => {
//expect(f5(3)).toBe(3);
//expect(f5(3)).toBe(f6(3));
//});
//});
