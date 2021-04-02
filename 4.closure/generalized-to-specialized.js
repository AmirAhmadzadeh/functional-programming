// generalized to specialized
//
//

///////////////////////////////// ex-1
//function add(x, y) {
//return x + y;
//}

//let res = [0, 2, 4, 6, 8].map((item) => {
//return add(item, 1);
//});

/////////////////////////////////  solution

/// /////// ths  is not real implemetation of curry

function add(x) {
  return function (y) {
    return x + y;
  };
}

const addAnythingTo1 = add(1);

let res = [0, 2, 4, 6, 8].map(addAnythingTo1);

//////////////////// solution
//

function curry(fn) {}

function add(x, y) {
  return x + y;
}

add = curry(add);
let res = [0, 2, 4, 6, 8].map(add(1));
