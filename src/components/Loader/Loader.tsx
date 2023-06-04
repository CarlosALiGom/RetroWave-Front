import LoaderStyled from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="custom-loader" aria-label="Loading"></div>
    </LoaderStyled>
  );
};

export default Loader;
