import { useNavigate } from "react-router-dom";
import SynthForm from "../../components/SynthForm/SynthForm";
import useSynths from "../../hooks/useSynths/useSynths";
import { useAppDispatch } from "../../store";
import { addSynthActionCreator } from "../../store/synths/synthSlice";
import { SynthStructure } from "../../store/synths/types";
import paths from "../../router/paths/paths";

const AddSynthPage = (): React.ReactElement => {
  const { addSynth } = useSynths();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialSynthData: SynthStructure = {
    brand: "",
    description: "",
    imageUrl: "",
    name: "",
    type: "",
    yearOfCreation: "",
  };
  const handleFormSubmit = async (synthData: SynthStructure) => {
    const synth = await addSynth(synthData);

    if (!synth) {
      return;
    }
    dispatch(addSynthActionCreator(synth));
    navigate(paths.home);
  };

  return (
    <SynthForm
      submitForm={handleFormSubmit}
      initialSynthData={initialSynthData}
      buttonText="Add"
    />
  );
};

export default AddSynthPage;
