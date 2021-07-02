type User = {
  id: string;
  name: string;
  email: string;
};

type userWithoutEmail = Omit<User, "email">;

let user: userWithoutEmail = {
  id: " tets",
  name: "tete",
  email: "tete",
};

console.log(user);
