import { renderHook } from "@testing-library/react";
import { realTokenMock, userCredentialsMock } from "../../mocks/userMocks";
import useUser from "./useUser";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapWithProviders } from "../../utils/testUtils";

describe("Given a getUserToken function", () => {
  describe("When its called with a username 'Frank' and a password 'Frank' valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = realTokenMock;
      const userCredentials = {
        username: "admin",
        password: "admin",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });
      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it receives invalid user credentials", () => {
    test("Then it should return throw 'Wrong credentials' error message", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const token = getUserToken(userCredentialsMock);

      expect(token).resolves.toBeUndefined();
    });
  });
});
