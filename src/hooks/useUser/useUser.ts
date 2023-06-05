import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { UserCredentialsStructure } from "../../types";
import { errorMessages } from "../../utils/errorMessages";
import { useAppDispatch } from "../../store";
import { showErrorActionCreator } from "../../store/ui/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();
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
      dispatch(
        showErrorActionCreator({
          message: errorMessages.wrongCredentials,
          isError: true,
        })
      );
      throw new Error(errorMessages.wrongCredentials);
    }
  };

  return { getUserToken };
};

export default useUser;
