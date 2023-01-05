import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SearchFilter = ({ filters, handleChange, value }) => {
  return (
    <Select
      className="bg-white h-10 border-none rounded-sm hover:border-0 outline-none"
      labelId="filter-selector"
      id="filter-select-helper"
      value={value}
      onChange={handleChange}
    >
      {filters.map((filter, index: number) => (
        <MenuItem key={index} value={filter}>
          <span className="text-black text-opacity-80 text-[13px]">{filter}</span>
        </MenuItem>
      ))}
    </Select>
  );
};

export default SearchFilter;
