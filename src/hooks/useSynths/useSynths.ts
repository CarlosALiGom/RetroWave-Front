import { useCallback, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import {
  ResponseDataStructure,
  SynthDataStructure,
  SynthStructure,
} from "../../store/synths/types";
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

  const getSynths = useCallback(
    async (
      skip: number,
      limit: number,
      type?: string
    ): Promise<ResponseDataStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { synths, totalSynths },
        } = await axios.get<{
          synths: SynthDataStructure[];
          totalSynths: number;
        }>(
          `${apiUrl}${paths.synths}?skip=${skip}&limit=${limit}&${
            type && `&type=${type}`
          }`,
          requestAuthorization
        );

        dispatch(hideLoadingActionCreator());

        return { synths, totalSynths };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showErrorActionCreator({
            message: errorMessages.synthsNotFound,
            isError: true,
          })
        );
      }
    },
    [dispatch, requestAuthorization]
  );

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
  ): Promise<SynthDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const { data } = await axios.post<{ synth: SynthDataStructure }>(
        `${apiUrl}${paths.synths}`,
        { synth: synth },
        requestAuthorization
      );
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: feedbackMessage.synthAdded,
          isError: false,
        })
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

  const getSelectedSynth = async (
    id: string
  ): Promise<SynthDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { synth },
      } = await axios.get(`${apiUrl}/${id}`, requestAuthorization);

      dispatch(hideLoadingActionCreator());

      return synth;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showErrorActionCreator({
          message: errorMessages.notDetailsFound,
          isError: true,
        })
      );
    }
  };

  return { getSynths, deleteSynths, addSynth, getSelectedSynth };
};

export default useSynths;
