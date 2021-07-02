
interface User {
  name: string;
  email?: string;
}

interface Admin {
  admin: boolean;
  role?: string;
  name: string;
}

const user: User = {
  name: "Leonardo",

};

const admin: Admin = {
  name: "Leonardo",
  admin: true
};

function print<T>(arg: T): T{
  console.log(arg);
  return arg;
}

print<User>(user); 
print<Admin>(admin)