import FormControl from "@mui/material/FormControl";
import React, { MouseEventHandler } from "react";
import { AppDialog } from "..";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";


interface PreviewInterface {
  handleClose?: any;
  /**Determines the open and close state of the dialog */
  open: boolean;
  /**Handle the closing state of the dialgo */
  closeButtonClick?: MouseEventHandler;
  /**Handle the closing state of the dialgo */
  undoButtonClick?: MouseEventHandler;
}

const InviteUser = ({
  handleClose,
  open,
  closeButtonClick,
  undoButtonClick,
}: PreviewInterface) => {

  const ModalTitle = () => (
    <div className="flex justify-between items-center">
      <h2 className="page-name text-lg font-semibold text-primary-black">
        <span>Invite Users</span>
      </h2>
      <div className="gap-1 items-center -mt-[5px]">
        <IconButton aria-label="undo" size="small" onClick={undoButtonClick}>
          <TurnLeftRoundedIcon className="font-extralight" />
        </IconButton>
        <IconButton aria-label="close" size="small" onClick={closeButtonClick}>
          <CloseRoundedIcon className="font-extralight" />
        </IconButton>
      </div>
    </div>
  );

  return (
    <AppDialog open={open} handleClose={handleClose} title={<ModalTitle />}>
      <div className="relative w-full space-y-8 mt-5">
        <FormControl className="w-full">
          <label htmlFor="#name" className="font-semibold mb-3 text-sm">
            Name
          </label>
          <TextField
            type={"text"}
            size="small"
            autoComplete="off"
            className="w-full rounded-none placeholder:text-xs"
            name="name"
            id="name"
            placeholder="Enter name"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
          />
        </FormControl>
        <FormControl className="w-full">
          <label htmlFor="#name" className="font-semibold mb-3 text-sm">
            Email
          </label>
          <TextField
            type={"email"}
            autoComplete="off"
            size="small"
            className="w-full rounded-none placeholder:text-xs"
            name="email"
            placeholder="Enter email"
            id="email"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
          />
        </FormControl>
        <FormControl className="role">
          <p className="text-md mb-2 font-semibold">Role</p>
          <RadioGroup
            aria-labelledby="role-radio-buttons"
            name="role"
            className="gap-5"
          >
            <div className="flex items-center justify-start">
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label={""}
                className="self-start"
              />
              <div className="relative sm:w-4/5">
                <h2 className="tracking-tight py-1">Administrator</h2>
                <span className="text-sm text-gray-400 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quis suscipit laudantium libero facilis dolore quasi maxime
                  ducimus. Rerum, officia!
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <FormControlLabel
                value="super_admin"
                control={<Radio />}
                label={""}
                className="self-start"
              />
              <div className="relative sm:w-4/5">
                <h2 className="tracking-tight py-1">Super Admin</h2>
                <span className="text-sm text-gray-400 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quis suscipit laudantium libero facilis dolore quasi maxime
                  ducimus. Rerum, officia!
                </span>
              </div>
            </div>
          </RadioGroup>
        </FormControl>
        <div className="flex gap-3 items-center justify-end py-8 md:mt-14">
          <Button
            onClick={closeButtonClick}
            variant="outlined"
            className="rounded-none font- capitalize bg-white border-gray-400 text-primary-black text-opacity-75 hover:text-main-text px-5"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {}}
            variant="contained"
            className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md px-5"
          >
            Invite User
          </Button>
        </div>
      </div>
    </AppDialog>
  );
};

export default InviteUser;
