import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { UserCredentialsStructure } from "../../types";
import { errorMessages } from "../../utils/errorMessages";

const useUser = () => {
  const getUserToken = async (
    credentials: UserCredentialsStructure
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        credentials
      );
      return token;
    } catch (error) {
      throw new Error(errorMessages.wrongCredentials);
    }
  };

  return { getUserToken };
};

export default useUser;
