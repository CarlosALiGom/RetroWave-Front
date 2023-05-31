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

export const userDataToken: UserTokenStructure = {
  id: "64707ddf2d09cd1540f0faaf",
  name: "admin",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
};

export const tokenMock = "tokenMock";

export const realTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM";
