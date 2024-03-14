import { NameSpace } from "../../const/const";
import { State } from "../../services/type-service";

export const getAuthStatus = (state: State): string => state[NameSpace.Auth].authStatus;