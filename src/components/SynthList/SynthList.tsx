import { SynthDataStructure } from "../../store/synths/types";
import SynthListStyled from "./SynthListStyled";

interface SytnhListProps {
  synths: SynthDataStructure[];
}
const SynthList = ({ synths }: SytnhListProps): React.ReactElement => {
  return (
    <SynthListStyled className="synth-list">
      {synths.map((synth) => (
        <li key={synth.yearOfCreation} className="Synth-list__card">
          <h2>{synth.name}</h2>
        </li>
      ))}
    </SynthListStyled>
  );
};

export default SynthList;
