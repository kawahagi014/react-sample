import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../../types/api/user';

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export function LoginUserProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
}
