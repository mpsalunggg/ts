type Userss = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

// Ambil hanya id dan name
type UserPreview = Pick<Userss, "id" | "name">;

/*
UserPreview = {
  id: number;
  name: string;
}
*/

const users: UserPreview = {
  id: 1,
  name: "Alice"
};

type Posts = {
  id: number;
  title: string;
  body: string;
  authorId: number;
};

function showPostTitle(post: Pick<Posts, "title">) {
  console.log(post.title);
}