export type UserProfile = {
  userId: number;
  userName: string;
  status: "active" | "inactive";
};

export function createUserProfile(id: number, name: string): UserProfile;