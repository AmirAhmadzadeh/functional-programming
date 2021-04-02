// closure
function strBuilder(str) {
  return function next(v) {
    if (typeof v === "string") {
      return strBuilder(str + v);
    }
    return str;
  };
}

const hello = strBuilder("Hello, ");
const amir = hello("amir");
const susan = hello("Sara");
const question = amir("?")();
const greeting = susan("!")();

strBuilder("Hello, ")("")("amir")(".")("")() === "Hello, amir.";
hello() === "Hello, ";
amir() === "Hello, amir";
susan() === "Hello, Sara";
question === "Hello, amir?";
greeting === "Hello, Sara!";
