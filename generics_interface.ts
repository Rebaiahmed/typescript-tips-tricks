interface GenericType<T, U> {
  id: T;
  name: U;
}

function showTypes(args: GenericType<number, string>) {
  console.log(args);
}

showTypes({
  id: 1,
  name: "test",
});
