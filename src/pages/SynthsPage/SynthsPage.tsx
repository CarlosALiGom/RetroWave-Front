import { useEffect } from "react";
import { getSynthsDataMock } from "../../mocks/factories/synthFactory/synthFactory";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSynthsActionCreator } from "../../store/synths/synthSlice";
import SynthsPageStyled from "./SynthsPageStyled";
import SynthList from "../../components/SynthList/SynthList";
import { SynthStructure } from "../../store/synths/types";

const SynthsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const synthsList = getSynthsDataMock(3);
    dispatch(loadSynthsActionCreator(synthsList));
  }, [dispatch]);

  const synths = useAppSelector(
    (state): SynthStructure[] => state.synths.synths
  );

  return (
    <SynthsPageStyled className="header">
      <h1 className="header__title">Synths</h1>
      <SynthList synths={synths} />
    </SynthsPageStyled>
  );
};

export default SynthsPage;
