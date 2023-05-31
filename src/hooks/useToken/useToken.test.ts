import getTokenData from "./useToken";
import { realTokenMock, userDataToken } from "../../mocks/userMocks";

describe("Given a getTokenData function", () => {
  describe("When its called with a token", () => {
    test("Then it should return the token decoded", () => {
      const token = realTokenMock;
      const userData = userDataToken;

      const tokenDecoded = getTokenData(token);

      expect(tokenDecoded).toStrictEqual(userData);
    });
  });
});
