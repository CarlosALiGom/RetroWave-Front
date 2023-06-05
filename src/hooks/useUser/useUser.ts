import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { errorMessages } from "../../utils/errorMessages";
import { useAppDispatch } from "../../store";
import { showErrorActionCreator } from "../../store/ui/uiSlice";
import { apiUrl } from "../../mocks/handlers";

const useUser = () => {
  const dispatch = useAppDispatch();
  const getUserToken = async (
    credentials: UserCredentialsStructure
  ): Promise<string | undefined> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        credentials
      );
      return token;
    } catch (error) {
      (error as Error).message = errorMessages.wrongCredentials;
      dispatch(
        showErrorActionCreator({
          message: errorMessages.wrongCredentials,
          isError: true,
        })
      );
    }
  };

  return { getUserToken };
};

export default useUser;
