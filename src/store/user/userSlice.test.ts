import { userData, UserDataState } from "../../mocks/userMocks";
import {
  initialUserState,
  loginUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives a current user state and a loginUser action with a user data payload", () => {
    test("Then it should show the current user data state with the data from the payload", () => {
      const loginUserAction = loginUserActionCreator(userData);

      const newUserData = userReducer(initialUserState, loginUserAction);

      expect(newUserData).toStrictEqual(UserDataState);
    });
  });
});
