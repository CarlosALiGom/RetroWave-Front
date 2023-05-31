import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/userMocks";

describe("Given a set token function", () => {
  describe("When its called with a key 'token' and a token", () => {
    test("Then the local storage should have the value in", () => {
      const key = "token";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      expect(localStorage.getItem(key)).toStrictEqual(tokenMock);
    });
  });
});
