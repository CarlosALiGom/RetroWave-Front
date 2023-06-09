import { useState } from "react";
import { SynthStructure } from "../../store/synths/types";
import SynthFormStyled from "./SynthFormStyled";

const SynthForm = () => {
  const initialSynthData: SynthStructure = {
    brand: "",
    description: "",
    imageUrl: "",
    name: "",
    type: "",
    yearOfCreation: "",
  };

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

  return (
    <SynthFormStyled className="form" autoComplete="off">
      <h1 className="form__title">Add Synth</h1>
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
          className="form__input"
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
      <button type="submit" className="form__button">
        Add
      </button>
    </SynthFormStyled>
  );
};

export default SynthForm;
