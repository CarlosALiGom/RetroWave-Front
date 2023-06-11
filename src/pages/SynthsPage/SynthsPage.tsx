import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSynthsActionCreator } from "../../store/synths/synthSlice";
import SynthsPageStyled from "./SynthsPageStyled";
import SynthList from "../../components/SynthList/SynthList";
import useSynths from "../../hooks/useSynths/useSynths";
import Pagination from "../../components/Pagination/Pagination";

const SynthsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSynths } = useSynths();
  const islogged = useAppSelector((state) => state.users.isLogged);
  const [skip, setSkip] = useState(0);
  const [totalSynthsReceived, setTotalSynthsRecevied] = useState(0);
  const limit = 10;

  useEffect(() => {
    islogged &&
      (async () => {
        const response = await getSynths(skip, limit);

        if (response) {
          const { synths, totalSynths } = response;

          setTotalSynthsRecevied(totalSynths);

          dispatch(loadSynthsActionCreator(synths));

          const precconect = await document.createElement("link");
          precconect.rel = "preload";
          precconect.as = "image";
          precconect.href = synths[0].imageUrl;

          const parent = document.head;
          const firstChild = document.head.firstChild;
          parent.insertBefore(precconect, firstChild);
        }
      })();
  }, [dispatch, getSynths, islogged, skip]);

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
