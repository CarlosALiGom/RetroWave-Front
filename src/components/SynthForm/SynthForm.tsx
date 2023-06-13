import { useState } from "react";
import { SynthStructure } from "../../store/synths/types";
import SynthFormStyled from "./SynthFormStyled";
import Button from "../Button/Button";

interface SynthFormPropsStructure {
  submitForm: (synth: SynthStructure) => void;
  initialSynthData: SynthStructure;
  buttonText: string;
}

const SynthForm = ({
  submitForm,
  initialSynthData,
  buttonText,
}: SynthFormPropsStructure) => {
  const [synthData, setSynthData] = useState(initialSynthData);

  const onChangeData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setSynthData({
      ...synthData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSynthForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(synthData);
    setSynthData(initialSynthData);
  };

  const isValidForm =
    synthData.brand !== "" &&
    synthData.description !== "" &&
    synthData.imageUrl !== "" &&
    synthData.name !== "" &&
    synthData.type !== "" &&
    synthData.yearOfCreation !== "";

  return (
    <SynthFormStyled
      className="form"
      autoComplete="off"
      onSubmit={handleSynthForm}
    >
      <h1 className="form__title">{buttonText} Synth</h1>
      <div className="form__controls">
        <label htmlFor="name" className="form__label">
          Model:
        </label>

        <input
          type="text"
          className="form__input"
          id="name"
          value={synthData.name}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="brand" className="form__label">
          Brand:
        </label>
        <input
          type="text"
          className="form__input"
          id="brand"
          value={synthData.brand}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="yearOfCreation" className="form__label">
          Release year:
        </label>
        <input
          type="text"
          className="form__input"
          id="yearOfCreation"
          value={synthData.yearOfCreation}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="type" className="form__label">
          Type:
        </label>
        <select
          id="type"
          className="form__input form__input--select"
          value={synthData.type}
          onChange={onChangeData}
        >
          <option value=""></option>
          <option value="Analog">Analog</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Digital">Digital</option>
        </select>
      </div>
      <div className="form__controls">
        <label htmlFor="imageUrl" className="form__label">
          Image:
        </label>
        <input
          type="text"
          className="form__input"
          id="imageUrl"
          value={synthData.imageUrl}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="description" className="form__label">
          Description:
        </label>
        <textarea
          className="form__input  form__input--description"
          id="description"
          value={synthData.description}
          onChange={onChangeData}
        />
      </div>
      <Button
        type="submit"
        className="form__button"
        isDisabled={!isValidForm}
        text={buttonText}
      />
    </SynthFormStyled>
  );
};

export default SynthForm;
