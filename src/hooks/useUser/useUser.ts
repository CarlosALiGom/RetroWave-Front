import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { UserCredentialsStructure } from "../../types";
import { useCallback } from "react";

const useUser = () => {
  const getUserToken = useCallback(
    async (credentials: UserCredentialsStructure): Promise<string> => {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        credentials
      );
      return token;
    },
    []
  );

  return { getUserToken };
};

export default useUser;
