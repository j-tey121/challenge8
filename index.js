//Even numbers challenge.
function even(array) {
  let Array = [];
  let J = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      Array[J] = array[i];
      J++;
    }
    console.log(Array);
  }
}
//Representing a person.
const person = {
  name: "",
  age: "",
  email: "",
};
let people = [person];
let elders = [];

function People(person) {
  for (const i in person) {
    if (person.age > 30) {
      elders.push(i);
    }
  }
}
//implementing a stack//
function Stack() {
  let stack = [];
  let item = "";
  stack.push(item);
  console.log(stack);
}
//implementing a queue//
function Queue() {
  let queue = [];
  let item = "";
  queue.unshift(item);
  console.log(queue);
}
////A function that removes vowels from a sting////
// let v="AEUIOaeuio";
//   v=v.split("");
//   let N=n.split(" ")
//   for (let i = 0; i < N.length; i++) {
//     let m=n.split("");
//     for (let j = 0; j < m.length; j++) {
//       if (v.includes(m[i][j])){
//         m[i][j].pop();
//       }
//       return N[i]=m.join("");
//     }
//     return m[i].join(" ");
//   }

function vowels(n) {
  let N = n.replace(/[aeiou]/gi, "");
  console.log(N);
}
//unique elemts from two arrays//
function unique(a, b) {
  let cd = [];
  for (let i = 0; i < a.length; i++) {
    if (b.include(a[i]) == false) {
      cd.push(a[i]);
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (a.include(b[j]) == false) {
      cd.push(b[j]);
    }
  }
  console.log(cd);
}
