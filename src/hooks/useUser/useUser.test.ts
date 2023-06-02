import { renderHook } from "@testing-library/react";
import { realTokenMock, userCredentialsMock } from "../../mocks/userMocks";
import useUser from "./useUser";

describe("Given a getUserToken function", () => {
  describe("When its called with a username 'Frank' and a password 'Frank' valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = realTokenMock;
      const userCredentials = userCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());
      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });
});
