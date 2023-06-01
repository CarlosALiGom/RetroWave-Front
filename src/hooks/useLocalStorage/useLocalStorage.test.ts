import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/userMocks";

describe("Given a useLocalStorage custom hook", () => {
  const key = "token";
  describe("When its function setToken its called with a key 'token' and a token", () => {
    test("Then the local storage should have the token in", () => {
      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      expect(localStorage.getItem(key)).toStrictEqual(tokenMock);
    });
  });

  describe("When its function getToken its called with a key 'token' and there is a token in localStorage", () => {
    test("Then it should return the token", () => {
      const {
        result: {
          current: { getToken, setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      const token = getToken(key);

      expect(token).toStrictEqual(tokenMock);
    });
  });

  describe("When its function removeToken its called with a key 'token' and there is a token in local storage", () => {
    test("Then it should remove the token from the local storage", () => {
      const expectedLocalStorageLength = 0;

      const {
        result: {
          current: { setToken, removeToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);
      removeToken(key);

      expect(localStorage.length).toStrictEqual(expectedLocalStorageLength);
    });
  });
});
