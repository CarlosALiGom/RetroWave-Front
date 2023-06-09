import { useCallback, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { SynthDataStructure, SynthStructure } from "../../store/synths/types";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { errorMessages } from "../../utils/errorMessages";
import paths from "../../router/paths/paths";
import { feedbackMessage } from "../../utils/feedbackMessages";

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

  const deleteSynths = async (id: string): Promise<void> => {
    try {
      await axios.delete(
        `${apiUrl}${paths.synths}/${id}`,
        requestAuthorization
      );
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: feedbackMessage.synthDeleted,
          isError: false,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: errorMessages.synthNotDeleted,
          isError: true,
        })
      );
    }
  };

  const addSynth = async (
    synth: SynthStructure
  ): Promise<SynthStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const { data } = await axios.post<{ synth: SynthStructure }>(
        `${apiUrl}${paths.synths}`,
        { synth: synth },
        requestAuthorization
      );

      return data.synth;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: errorMessages.synthNotAdded,
          isError: true,
        })
      );
    }
  };

  return { getSynths, deleteSynths, addSynth };
};

export default useSynths;
