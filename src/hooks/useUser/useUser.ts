import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { UserCredentialsStructure } from "../../types";

const useUser = () => {
  const getUserToken = async (
    credentials: UserCredentialsStructure
  ): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(
      `${apiUrl}/user/login`,
      credentials
    );
    return token;
  };

  return { getUserToken };
};

export default useUser;
