interface Todo {
  name: string;
}

let item: Readonly<Todo> = { name: "test" };
item.name = "test2";
