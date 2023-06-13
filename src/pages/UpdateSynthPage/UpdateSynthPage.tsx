import { useNavigate } from "react-router-dom";
import SynthForm from "../../components/SynthForm/SynthForm";
import useSynths from "../../hooks/useSynths/useSynths";
import { useAppSelector } from "../../store";
import { SynthStructure } from "../../store/synths/types";
import paths from "../../router/paths/paths";

const UpdateSynthPage = (): React.ReactElement => {
  const { brand, description, imageUrl, name, type, yearOfCreation, id } =
    useAppSelector((state) => state.synths.selectedSynth);
  const { updateSynth } = useSynths();
  const navigate = useNavigate();
  const initialSynthData: SynthStructure = {
    brand: brand,
    description: description,
    imageUrl: imageUrl,
    name: name,
    type: type,
    yearOfCreation: yearOfCreation,
  };

  const handleOnSubmit = async (synthData: SynthStructure) => {
    await updateSynth(id, { ...synthData, id });
    navigate(paths.home);
  };

  return (
    <SynthForm
      submitForm={handleOnSubmit}
      initialSynthData={initialSynthData}
      buttonText="Update"
    />
  );
};

export default UpdateSynthPage;
