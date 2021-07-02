/* 
const people = { mary: { name: "Mary" } };
const caty = people.caty.name;

// TypeError: Cannot read property 'name' of undefined */

const arr = [
  { code: "a" },
  { code: "b" },
  { code: "c" },
  { name: "Caty" },
  { name: "Siri" }
];

const withCode = arr.map(function(element) {
  if (element.code) return element;
});

const notThere = withCode[3]?.code;

console.log(notThere);