import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Searchbar, SearchFilter } from "..";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MonthsFilter } from "../../utils/data";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

/** The Search and Filters displayed on top of data table */
const TableFilters = () => {
  const { width } = useWindowSize();
  //Search Filter Hook
  const [filter, setFilter] = useState(MonthsFilter[0]);

  // Filter Change Handler
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  // Filter Menu Hooks
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const filters = ["Filter", "Categories"];

  const FilterContent = () => (
    <div className="space-x-2 space-y-2">
      <SearchFilter
        filters={filters}
        value={filters[0]}
        handleChange={() => {}}
      />
      <SearchFilter
        filters={MonthsFilter}
        value={filter}
        handleChange={handleFilterChange}
      />
    </div>
  );
  return (
    <div className="flex items-center gap-2 my-8">
      <Searchbar />
      {width < 480 ? (
        <>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "filter-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="bg-gray-300/50 hover:bg-gray-400/50 rounded-none"
          >
            <FilterAltOutlinedIcon />
          </IconButton>
          <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
            <div className="p-2">
              <FilterContent />
            </div>
          </Menu>
        </>
      ) : (
        <FilterContent />
      )}
    </div>
  );
};

export default TableFilters;
