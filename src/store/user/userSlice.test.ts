import { userData, UserDataState } from "../../mocks/userMocks";
import {
  initialUserState,
  loginUserActionCreator,
  logOutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives a current user state and a loginUser action with a user data payload", () => {
    test("Then it should change the current user data state with the user data from the payload", () => {
      const loginUserAction = loginUserActionCreator(userData);

      const newUserData = userReducer(initialUserState, loginUserAction);

      expect(newUserData).toStrictEqual(UserDataState);
    });
  });

  describe("When it receives a logOutUser action", () => {
    test("Then it should change the user data state to the initial user data state", () => {
      const loginUserAction = logOutUserActionCreator();

      const newUserData = userReducer(UserDataState, loginUserAction);

      expect(newUserData).toStrictEqual(initialUserState);
    });
  });
});
