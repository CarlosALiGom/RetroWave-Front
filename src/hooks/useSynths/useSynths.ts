import { useCallback } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { SynthDataStructure } from "../../store/synths/types";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
} from "../../store/ui/uiSlice";
import { errorMessages } from "../../utils/errorMessages";
import paths from "../../router/paths/paths";

const useSynths = () => {
  const token = useAppSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const getSynths = useCallback(async (): Promise<
    SynthDataStructure[] | undefined
  > => {
    try {
      const requestAuthorization = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data: synths } = await axios.get<
        SynthDataStructure[] | undefined
      >(`${apiUrl}${paths.synths}`, requestAuthorization);
      dispatch(hideLoadingActionCreator());

      return synths;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: errorMessages.synthsNotFound,
          isError: true,
        })
      );
    }
  }, [token, dispatch]);

  return { getSynths };
};

export default useSynths;
