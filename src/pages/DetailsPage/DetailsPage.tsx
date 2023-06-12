import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import DetailsPageStyled from "./DetailPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useSynths from "../../hooks/useSynths/useSynths";
import { useEffect } from "react";
import {
  deleteSynthActionCreator,
  loadSelectedSynthActionCreator,
} from "../../store/synths/synthSlice";
import { SynthDataStructure } from "../../store/synths/types";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";
import paths from "../../router/paths/paths";

const DetailsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSelectedSynth } = useSynths();
  const { synthId } = useParams();
  const synth = useAppSelector((state) => state.synths.selectedSynth);
  const { deleteSynths } = useSynths();
  const navigate = useNavigate();

  window.scroll(0, 0);
  const deleteOnClick = async () => {
    dispatch(showLoadingActionCreator());
    await deleteSynths(synth.id);
    dispatch(deleteSynthActionCreator(synth.id));
    navigate(paths.home);
  };
  useEffect(() => {
    (async () => {
      if (synthId) {
        const synth = await getSelectedSynth(synthId);

        dispatch(loadSelectedSynthActionCreator(synth as SynthDataStructure));
      }
    })();
  }, [getSelectedSynth, synthId, dispatch]);

  return (
    <DetailsPageStyled className="details-page">
      <div className="details-page__controls">
        <Button className="details-page__buttons" text="Edit" />
        <Button
          className="details-page__buttons"
          text="Delete"
          actionOnClick={deleteOnClick}
        />
      </div>
      <article className="details-page__article">
        <img
          src={synth.imageUrl}
          alt={synth.name}
          className="details-page__image"
        />
        <h1 className="details-page__title">{synth.name}</h1>
        <ul className="details-page__properties">
          <li className="details-page__properties--title">
            Brand:
            <span className="details-page__properties--text">
              {synth.brand}
            </span>
          </li>
          <li className="details-page__properties--title">
            Release year:
            <span className="details-page__properties--text">
              {synth.yearOfCreation}
            </span>
          </li>
          <li className="details-page__properties--title">
            Type:
            <span className="details-page__properties--text">{synth.type}</span>
          </li>
          <li className="details-page__properties--title">
            Description:
            <span className="details-page__properties--text">
              {synth.description}
            </span>
          </li>
        </ul>
      </article>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
