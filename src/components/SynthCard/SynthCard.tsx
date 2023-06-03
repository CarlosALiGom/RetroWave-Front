import { SynthDataStructure } from "../../store/synths/types";
import SynthCardStyled from "./SynthCardStyled";

interface SynthCardProps {
  synth: SynthDataStructure;
}
const SynthCard = ({ synth }: SynthCardProps): React.ReactElement => {
  return (
    <SynthCardStyled className="card-list">
      <img src={synth.imageUrl} alt={synth.name} className="card-list__image" />
      <h2 className="card-list__title">{synth.name}</h2>
      <button className="card-list__button">
        <img
          src="./img/deleteSynth.svg"
          alt="delete synth"
          width={34}
          height={34}
        />
      </button>
    </SynthCardStyled>
  );
};

export default SynthCard;
