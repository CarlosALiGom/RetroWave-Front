import { UserDataStructure, UserTokenStructure } from "../store/user/types";
import { UserCredentialsStructure } from "../types";

export const userData: UserTokenStructure = {
  id: "42345sdfdf",
  name: "carlos",
  token: "tokenMock",
};

export const UserDataState: UserDataStructure = {
  id: "42345sdfdf",
  name: "carlos",
  token: "tokenMock",
  isLogged: true,
};

export const userCredentialsMock: UserCredentialsStructure = {
  username: "Frank",
  password: "Frank",
};

export const tokenMock = "tokenMock";
