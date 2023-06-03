import { SynthDataStructure } from "../../store/synths/types";
import Button from "../Button/Button";
import SynthCardStyled from "./SynthCardStyled";

interface SynthCardProps {
  synth: SynthDataStructure;
}
const SynthCard = ({ synth }: SynthCardProps): React.ReactElement => {
  return (
    <SynthCardStyled className="card-list">
      <img src={synth.imageUrl} alt={synth.name} className="card-list__image" />
      <h2 className="card-list__title">{synth.name}</h2>
      <Button
        className="card-list__button"
        iconPath="img/deleteSynth.svg"
        width={34}
        height={34}
        altText="delete button"
      />
    </SynthCardStyled>
  );
};

export default SynthCard;
