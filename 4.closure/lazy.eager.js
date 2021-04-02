// lazy eager
//
//
//
////////////////////////////ex 1
//function reapeater(count) {
//let str;
//return function () {
//if (str === undefined) {
//str = "".padStart(count, "A");
//return str;
//}
//return str;
//};
//}

//const A = reapeater(10);

//A();
//A();

////////////////////////////////////// sol
//function reapeater2(count) {
//return memoized(function () {
//return "".padStart(count, "B");
//});
//}

//const B = reapeater2(10);

//B();
//B();

// another example
//function memoized(fn) {
//let value = [];
//return function (...args) {
//if (value[args[0]] === undefined) {
//value[args[0]] = fn(...args);
//return value[args[0]];
//}
//return value[args[0]];
//};
//}

//const memoizedFibo = memoized(fibo);

//function fibo(n) {
//if (n <= 2) {
//return 1;
//}
//return memoizedFibo(n - 2) + memoizedFibo(n - 1);
//}

//memoizedFibo(3);
//memoizedFibo(3);
//memoizedFibo(4);

///////////////////////////////////////
