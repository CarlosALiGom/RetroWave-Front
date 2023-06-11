import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  skip: number;
  totalSynths: number;
  limit: number;
  nextPage: () => void;
  backPage: () => void;
}
const Pagination = ({
  backPage,
  nextPage,
  skip,
  totalSynths,
  limit,
}: PaginationProps): React.ReactElement => {
  const nextPageOnClick = () => {
    nextPage();
  };
  const backPageOnClick = () => {
    backPage();
  };

  return (
    <PaginationStyled className="pagination">
      <Button
        className="pagination__button"
        text="Back"
        actionOnClick={backPageOnClick}
        isDisabled={skip === 0}
      />
      <Button
        className="pagination__button"
        text="Next"
        actionOnClick={nextPageOnClick}
        isDisabled={(skip + 1) * limit === totalSynths}
      />
    </PaginationStyled>
  );
};

export default Pagination;
