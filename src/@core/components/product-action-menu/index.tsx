import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface ActionInterface {
  /** function to execute when view is clicked */
  onView?: Function;
  /** function to execute when view is clicked */
  onEdit?: Function;
  /** function to execute when delete is clicked */
  onDelete?: Function;
}

const ProductActionMenu = ({ onView, onDelete, onEdit }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

    /**Handle the edit functionality of the cell */
    const handleEdit = () => {
      onEdit()
    setAnchorEl(null);
    };
/** Handle the view click function */
  const handleView = () => {
    onView();
    setAnchorEl(null);
    };

    /** Handle the delete click function */
    const handleDelete = () => {
        onDelete()
        setAnchorEl(null)
    }
    
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleEdit}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleView}>View</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete} className="text-main-text">
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductActionMenu;
