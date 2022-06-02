import { useContext } from "react";
import {
  LoginUserContextType,
  LoginUserContext,
} from "../components/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
