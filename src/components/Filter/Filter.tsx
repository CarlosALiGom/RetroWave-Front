import { Dispatch, SetStateAction } from "react";
import FilterStyled from "./FilterStyled";

interface filterDataStructure {
  type: string;
}
interface FilterDataProps {
  filterData: filterDataStructure;
  setFilterData: Dispatch<SetStateAction<{ type: string }>>;
}
const Filter = ({
  filterData,
  setFilterData,
}: FilterDataProps): React.ReactElement => {
  const onChangeFilterData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterData({
      ...filterData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <FilterStyled
      id="type"
      className="filter"
      aria-label="filter by type"
      value={filterData.type}
      onChange={onChangeFilterData}
    >
      <option value="">Type</option>
      <option value="Analog">Analog</option>
      <option value="Hybrid">Hybrid</option>
      <option value="Digital">Digital</option>
    </FilterStyled>
  );
};

export default Filter;
