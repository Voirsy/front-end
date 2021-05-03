import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContextState, UserData } from './types';

const initialUserData: UserData = {
  name: '',
  avatarUrl: '',
  token: '',
  type: '',
};

const initialState: AuthContextState = {
  userInfo: {
    ...initialUserData,
  },
  isAuthenticated: () => false,
  setAuthInfo: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextState>(initialState);

const { Provider } = AuthContext;

const setLocalStorageItem = (itemName: string, value: string) => {
  localStorage.setItem(itemName, value);
};

const removeLocalStorageItem = (itemName: string) => {
  localStorage.removeItem(itemName);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();
  // for now there are dummy data
  // in the future name, type and other insensitive data will be store in LocalStorage
  // token will be store in httpOnly Cookies and will be set using special method
  const [authState, setAuthState] = useState<UserData>({
    token: 'oisbh982hbjiopsjko0-v3v',
    name: 'Alex Srula',
    type: 'normal',
    avatarUrl:
      'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
  });

  // this method will be executing after log in
  // when user reload the page we will be using UseEffect cheking that he is still logged
  // by sending query to server
  const setAuthInfo = (data: UserData) => {
    setAuthState({ ...data });
    Object.entries(data).forEach((el) => setLocalStorageItem(el[0], el[1] || ''));
  };

  const logout = () => {
    setAuthState(initialUserData);
    Object.keys(authState).forEach((el) => removeLocalStorageItem(el[0]));
    history.push('/');
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.name || !authState.type || !authState.avatarUrl) {
      // logout();
      Object.keys(authState).forEach((el) => removeLocalStorageItem(el[0]));
      return false;
    }
    return true;
  };

  return (
    <Provider value={{ userInfo: authState, isAuthenticated, setAuthInfo, logout }}>
      {children}
    </Provider>
  );
};

export const useAuthContextState = () => useContext(AuthContext);
