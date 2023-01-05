// ** MUI Imports
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/material";
import { SearchFilter, User, Notifications } from "..";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// Dummy Filter Data
import { MonthsFilter } from "../../utils/data";
import { searchButtonClass, searchClassName } from "./nav-utils";
import { useWindowSize } from "../../hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();
  //Search Filter Hook
  const [filter, setFilter] = useState(MonthsFilter[0]);
  const [openSearch, setOpenSearch] = useState<boolean>();

  // Filter Change Handler
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const filters = ["Filter", "Categories", "Date"];

  useEffect(() => {
    if (width >= 768) {
      setOpenSearch(false);
    }
    return () => {
      setOpenSearch((prev) => prev);
    };
  }, [width]);

  // Filter Menu Hooks
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Searchbar
  const NavSearchBar = () => (
    <div className="relative w-full md:w-[400px] lg:w-[500px] transition-all duration-300">
      <input
        className={openSearch ? searchClassName : searchClassName + " hidden"}
        type="text"
        id="default-search"
        placeholder="Search..."
      />
      <div
        className={
          openSearch
            ? searchButtonClass + " absolute"
            : searchButtonClass + " md:absolute"
        }
      >
        <IconButton
          onClick={() => (width >= 768 ? null : setOpenSearch(!openSearch))}
        >
          {openSearch? <CloseRoundedIcon className="text-main-text" /> : <SearchOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );

  // Nav Filters
  const NavFilters = () => (
    <div
      className={
        openSearch
          ? "space-y-2 space-x-2"
          : "flex items-center gap-2 transition-all duration-100"
      }
    >
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
    <header className="w-full relative flex justify-between items-center font">
      <div className="flex items-center gap-x-2">
        <NavSearchBar />
        {openSearch && (
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
                <NavFilters />
              </div>
            </Menu>
          </>
        )}
        {/* Filters */}
        {width >= 768 && <NavFilters />}
      </div>
      {(!openSearch || (openSearch && width > 480)) && (
        <div className="user-utils flex gap-x-3">
          <Notifications />
          <User />
        </div>
      )}
    </header>
  );
};

export default Navbar;
