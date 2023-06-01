import { realTokenMock, userDecodedDataToken } from "../../mocks/userMocks";
import useToken from "./useToken";
import { renderHook } from "@testing-library/react";

describe("Given a getTokenData function", () => {
  describe("When its called with a token", () => {
    test("Then it should return the token decoded", () => {
      const token = realTokenMock;
      const userData = userDecodedDataToken;

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const tokenDecoded = getTokenData(token);

      expect(tokenDecoded).toStrictEqual(userData);
    });
  });
});
