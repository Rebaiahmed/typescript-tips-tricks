interface Person {
  name: string;
  age: number;
  friends: string[];
}

type UserNameAndAge = Pick<Person, "name" | "age">;
let person: UserNameAndAge = {
  name: "hello",
  age: 23,
};
