import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../mocks/userMocks";
import useUser from "./useUser";

describe("Given a getUserToken function", () => {
  describe("When its called with a username 'Frank' and a password 'Frank' valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
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
