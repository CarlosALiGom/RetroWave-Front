import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadSynthsActionCreator } from "../../store/synths/synthSlice";
import SynthsPageStyled from "./SynthsPageStyled";
import SynthList from "../../components/SynthList/SynthList";
import { synthDbMocks } from "../../mocks/synthsDbmocks";

const SynthsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const synthsList = synthDbMocks;

    dispatch(loadSynthsActionCreator(synthsList));
  }, [dispatch]);

  return (
    <SynthsPageStyled className="header">
      <h1 className="header__title">Synths</h1>
      <SynthList />
    </SynthsPageStyled>
  );
};

export default SynthsPage;
