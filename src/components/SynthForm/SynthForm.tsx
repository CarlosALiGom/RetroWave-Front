import SynthFormStyled from "./SynthFormStyled";

const SynthForm = () => {
  return (
    <SynthFormStyled className="form" autoComplete="off">
      <h1 className="form__title">Add Synth</h1>
      <div className="form__controls">
        <label htmlFor="model" className="form__label">
          Model:
        </label>
        <input type="text" className="form__input" id="model" />
      </div>
      <div className="form__controls">
        <label htmlFor="brand" className="form__label">
          Brand:
        </label>
        <input type="text" className="form__input" id="brand" />
      </div>
      <div className="form__controls">
        <label htmlFor="yearOfCreation" className="form__label">
          Release year:
        </label>
        <input type="text" className="form__input" id="yearOfCreation" />
      </div>
      <div className="form__controls">
        <label htmlFor="type" className="form__label">
          Type:
        </label>
        <select id="type" className="form__input">
          <option value="analog">Analog</option>
          <option value="hybrid">Hybrid</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className="form__controls">
        <label htmlFor="image" className="form__label">
          Image:
        </label>
        <input type="text" className="form__input" id="image" />
      </div>
      <div className="form__controls">
        <label htmlFor="description" className="form__label">
          Description:
        </label>
        <textarea
          className="form__input  form__input--description"
          id="description"
        />
      </div>
      <button type="submit" className="form__button">
        Add
      </button>
    </SynthFormStyled>
  );
};

export default SynthForm;
