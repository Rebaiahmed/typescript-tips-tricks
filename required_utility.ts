interface Test {
  a?: number;
  b?: number;
}

let test1: Test = { a: 5 };
let test2: Required<Test> = { a: 5 };

console.log(test2);
