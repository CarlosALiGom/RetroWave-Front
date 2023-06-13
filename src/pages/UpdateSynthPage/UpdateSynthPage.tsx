import SynthForm from "../../components/SynthForm/SynthForm";
import { useAppSelector } from "../../store";
import { SynthStructure } from "../../store/synths/types";

const UpdateSynthPage = (): React.ReactElement => {
  const { brand, description, imageUrl, name, type, yearOfCreation } =
    useAppSelector((state) => state.synths.selectedSynth);
  const initialSynthData: SynthStructure = {
    brand: brand,
    description: description,
    imageUrl: imageUrl,
    name: name,
    type: type,
    yearOfCreation: yearOfCreation,
  };

  return (
    <SynthForm
      submitForm={() => {
        return;
      }}
      initialSynthData={initialSynthData}
      buttonText="Update"
    />
  );
};

export default UpdateSynthPage;
