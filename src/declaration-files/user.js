export function createUserProfile(id, name) {
  return {
    userId: id,
    userName: name,
    status: "active",
  };
}


export const User = {
  createUser: (id, name) => {
    return { id, name, status: "active" };
  },

  updateUser: (id, user) => {
    return { ...user, id };
  },
};