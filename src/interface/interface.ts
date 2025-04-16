enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface RoleType {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface TypeUser {
  name: string;
  email: string;
  phone: number;
  gender: "male" | "female";
}

interface AdminUserType extends TypeUser, RoleType, UserPermissions {
  numberOfUsersReporting: number;
}

interface UserWithAddress extends TypeUser {
  address: string;
}

const userrr = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "male",
};

const userWithAddressss: UserWithAddress = {
  name: "mark",
  email: "mark@email.com",
  phone: 987654345,
  gender: "male",
  address: "This is an address",
};

const robs: AdminUserType = {
  name: "rob",
  email: "rob@email.com",
  phone: 99876787,
  gender: "male",
  role: Roles.admin,
  permissions: [
    PermissionsList.read,
    PermissionsList.write,
    PermissionsList.execute,
  ],
  numberOfUsersReporting: 5,
};

console.log(userrr);
console.log(userWithAddressss);
console.log(robs);
