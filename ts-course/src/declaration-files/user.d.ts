export type UserProfile = {
  userId: number;
  userName: string;
  status: "active" | "inactive";
};

export function createUserProfile(id: number, name: string): UserProfile;

export namespace User {
  interface UserProfile {
    id: number;
    name: string;
    status: "active" | "inactive";
  }

  function createUser(id: number, name: string): UserProfile;
  function updateUser(id: number, user: UserProfile): UserProfile;
}

export declare class RealUser {
  greeting: string;
  user: { name: string; greeting: string };

  constructor(greeting: string);
  createUser(name: string): { name: string; greeting: string };
  showGreeting(): void;
}

export declare class AdminUser extends RealUser {
  constructor();
  showGreeting(): void;
}