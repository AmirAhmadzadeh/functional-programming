//args adapter ;

//unary
function increament(x) {
  return sum(x, 1);
}

//binary
function sum(x, y) {
  return x + y;
}

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

function unary(fn) {
  return function one(arg) {
    return fn(arg);
  };
}

function f(...args) {
  return args;
}

const g = unary(f);
g(1, 2, 3, 4); /// [1]

const h = binary(f);
const res = h(1, 2, 3, 4);

/// hoc higher order functions

function filip(fn) {
  return function filliped(arg1, arg2, ...args) {
    return fn(arg2, arg1, ...args);
  };
}

function f(...args) {
  return args;
}

const fillpedF = filip(f);
fillpedF(1, 2, 3); // [2, 1 , 3]

function reverseArgs(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}

function g(...args) {
  return args;
}
