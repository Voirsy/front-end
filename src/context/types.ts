export type UserData = {
  name: string;
  avatarUrl: string;
  token: string;
  type: string;
  birthdate: string;
  phoneNumber: string;
  email: string;
};

export type AuthContextState = {
  userInfo: {
    [P in keyof UserData]: UserData[P];
  };
} & { isAuthenticated: () => boolean; setAuthInfo: (data: UserData) => void; logout: () => void };
