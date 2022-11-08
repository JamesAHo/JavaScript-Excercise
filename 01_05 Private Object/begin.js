/*
  WRITE YOUR SOLUTION HERE
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// Symbol is a built-in object whose constructor returns a symbol primitives
// also called Symbol value or just a symbol that's guaranteed to be unique.

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "james",
  [password]: "33@nfsdjnfsd",
  age:27
};

console.log(user.username)
console.log(user.password)

// output : undefined

