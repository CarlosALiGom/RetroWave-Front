import { useCallback, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { SynthDataStructure } from "../../store/synths/types";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { errorMessages } from "../../utils/errorMessages";
import paths from "../../router/paths/paths";

const useSynths = () => {
  const token = useAppSelector((state) => state.users.token);
  const dispatch = useAppDispatch();

  const requestAuthorization = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getSynths = useCallback(async (): Promise<
    SynthDataStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

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
  }, [dispatch, requestAuthorization]);

  return { getSynths };
};

export default useSynths;
