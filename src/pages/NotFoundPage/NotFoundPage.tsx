import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found__title">
      <h2 className="not-found__title">SP-404 Page not found...</h2>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
