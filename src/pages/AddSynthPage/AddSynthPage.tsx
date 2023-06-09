import SynthForm from "../../components/SynthForm/SynthForm";
import useSynths from "../../hooks/useSynths/useSynths";
import { useAppDispatch } from "../../store";
import { addSynthActionCreator } from "../../store/synths/synthSlice";
import { SynthStructure } from "../../store/synths/types";

const AddSynthPage = (): React.ReactElement => {
  const { addSynth } = useSynths();
  const dispatch = useAppDispatch();
  const handleFormSubmit = async (synthData: SynthStructure) => {
    const synth = await addSynth(synthData);

    if (synth) {
      dispatch(addSynthActionCreator(synth));
    }
  };

  return <SynthForm submitForm={handleFormSubmit} />;
};

export default AddSynthPage;
