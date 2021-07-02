interface User {
  name: string;
  email: string;
}

interface UserWithOptional {
  name?: string;
  email?: string;
}
// Property 'email' is missing in type '{ name: string; }' but required in type 'User'.

let user1: User = {
  name: "Ahmed  ",
};

let user2: UserWithOptional = {
  name: "Ahmed",
};
