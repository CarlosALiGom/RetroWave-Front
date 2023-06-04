import { useAppSelector } from "../../store";
import { SynthDataStructure } from "../../store/synths/types";
import SynthCard from "../SynthCard/SynthCard";
import SynthListStyled from "./SynthListStyled";

const SynthList = (): React.ReactElement => {
  const synths = useAppSelector(
    (state): SynthDataStructure[] => state.synths.synths
  );

  return (
    <SynthListStyled className="synth-list">
      {synths.map((synth) => (
        <li key={synth.id} className="Synth-list__card">
          <SynthCard synth={synth} />
        </li>
      ))}
    </SynthListStyled>
  );
};

export default SynthList;
