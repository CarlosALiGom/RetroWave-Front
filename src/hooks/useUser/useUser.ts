import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { errorMessages } from "../../utils/errorMessages";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
} from "../../store/ui/uiSlice";
import { apiUrl } from "../../mocks/handlers";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useAppDispatch();
  const getUserToken = useCallback(
    async (
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
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  return { getUserToken };
};

export default useUser;
