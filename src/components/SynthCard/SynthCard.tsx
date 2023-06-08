import useSynths from "../../hooks/useSynths/useSynths";
import { useAppDispatch } from "../../store";
import { deleteSynthActionCreator } from "../../store/synths/synthSlice";
import { SynthDataStructure } from "../../store/synths/types";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import SynthCardStyled from "./SynthCardStyled";

interface SynthCardProps {
  synth: SynthDataStructure;
  isLazy: "eager" | "lazy";
}
const SynthCard = ({ synth, isLazy }: SynthCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteSynths } = useSynths();

  const deleteOnClick = async () => {
    dispatch(showLoadingActionCreator());
    await deleteSynths(synth.id);
    dispatch(deleteSynthActionCreator(synth.id));
  };

  return (
    <SynthCardStyled className="card-list">
      <img
        src={synth.imageUrl}
        alt={synth.name}
        className="card-list__image"
        loading={isLazy}
      />
      <h2 className="card-list__title">{synth.name}</h2>
      <Button
        className="card-list__button"
        iconPath="img/deleteSynth.svg"
        width={34}
        height={34}
        altText="delete button"
        actionOnClick={deleteOnClick}
      />
    </SynthCardStyled>
  );
};

export default SynthCard;
