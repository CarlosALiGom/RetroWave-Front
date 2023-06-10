import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled className="pagination">
      <Button className="pagination__button" text="Back" />
      <Button className="pagination__button" text="Next" />
    </PaginationStyled>
  );
};

export default Pagination;
