import IconButton from "@mui/material/IconButton";
import { MouseEventHandler } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import { AppDialog } from "..";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
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

const RemoveMember = ({
  handleClose,
  open,
  closeButtonClick,
  undoButtonClick,
}: PreviewInterface) => {

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle className="bg-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="page-name font-semibold text-primary-black">
            <span>Remove Member</span>
          </h2>
          <div className="gap-1 items-center -mt-[5px]">
            <IconButton
              aria-label="undo"
              size="small"
              onClick={undoButtonClick}
            >
              <TurnLeftRoundedIcon className="font-extralight" />
            </IconButton>
            <IconButton
              aria-label="close"
              size="small"
              onClick={closeButtonClick}
            >
              <CloseRoundedIcon className="font-extralight" />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      <DialogContent className="mt-3">
        <span>
          You are about to remove a member which will not allow this person to
          login into Erogan anymore.
        </span>
      </DialogContent>
      <div className="flex gap-3 items-center justify-end bg-gray-100 h-16 px-5">
        <Button
          onClick={closeButtonClick}
          variant="outlined"
          className="rounded-none font- capitalize border-gray-400 text-primary-black text-opacity-75 hover:text-main-text px-5"
        >
          Keep Member
        </Button>
        <Button
          onClick={() => {}}
          variant="contained"
          className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md px-5"
        >
          Remove Member
        </Button>
      </div>
    </Dialog>
  );
};

export default RemoveMember;
