import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSynthsActionCreator } from "../../store/synths/synthSlice";
import SynthsPageStyled from "./SynthsPageStyled";
import SynthList from "../../components/SynthList/SynthList";
import useSynths from "../../hooks/useSynths/useSynths";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const SynthsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSynths } = useSynths();
  const islogged = useAppSelector((state) => state.users.isLogged);
  const [skip, setSkip] = useState(0);
  const [totalSynthsReceived, setTotalSynthsRecevied] = useState(0);
  const limit = 10;
  const [filterData, setFilterData] = useState({ type: "" });

  useEffect(() => {
    islogged &&
      (async () => {
        if (filterData.type !== "") {
          const response = await getSynths(skip, limit, filterData.type);

          if (response) {
            const { synths, totalSynths } = response;

            setTotalSynthsRecevied(totalSynths);

            dispatch(loadSynthsActionCreator(synths));
          }
        } else {
          const response = await getSynths(skip, limit);

          if (response) {
            const { synths, totalSynths } = response;

            setTotalSynthsRecevied(totalSynths);

            dispatch(loadSynthsActionCreator(synths));
          }
        }
      })();
  }, [dispatch, getSynths, islogged, skip, filterData.type]);

  const nextPage = () => {
    setSkip(skip + 1);
    window.scroll(0, 0);
  };
  const backPage = () => {
    setSkip(skip - 1);
    window.scroll(0, 0);
  };
  return (
    <SynthsPageStyled className="header">
      <h1 className="header__title">Synths</h1>
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <SynthList />
      <Pagination
        skip={skip}
        limit={limit}
        totalSynths={totalSynthsReceived}
        backPage={backPage}
        nextPage={nextPage}
      />
    </SynthsPageStyled>
  );
};

export default SynthsPage;
