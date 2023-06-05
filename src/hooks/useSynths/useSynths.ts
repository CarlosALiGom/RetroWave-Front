import { useCallback } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { SynthDataStructure } from "../../store/synths/types";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { hideLoadingActionCreator } from "../../store/ui/uiSlice";

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
      const { data: synths } = await axios.get<SynthDataStructure[]>(
        `${apiUrl}/synths`,
        requestAuthorization
      );
      dispatch(hideLoadingActionCreator());

      return synths;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      throw new Error("Synth request failed");
    }
  }, [token, dispatch]);

  return { getSynths };
};

export default useSynths;
