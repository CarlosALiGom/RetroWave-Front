import { useCallback, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../../mocks/handlers";
import { SynthDataStructure } from "../../store/synths/types";
import { useAppSelector } from "../../store";

const useSynths = () => {
  const token = useAppSelector((state) => state.users.token);

  const requestAuthorization = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getSynths = useCallback(async (): Promise<SynthDataStructure[]> => {
    const { data: synths } = await axios.get<SynthDataStructure[]>(
      `${apiUrl}/synths`,
      requestAuthorization
    );

    return synths;
  }, [requestAuthorization]);

  return { getSynths };
};

export default useSynths;
