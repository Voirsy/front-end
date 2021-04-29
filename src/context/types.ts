export type UserData = {
  name: string | null;
  avatarUrl: string | null;
  token: string | null;
  type: string | null;
};

export type AuthContextState = {
  userInfo: {
    [P in keyof UserData]: UserData[P];
  };
} & { isAuthenticated: () => boolean; setAuthInfo: (data: UserData) => void; logout: () => void };
