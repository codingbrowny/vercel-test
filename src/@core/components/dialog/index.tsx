import * as React from "react";
import { ReactChild, ReactElement, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { DialogTitle } from "@mui/material";

type ElementType = ReactElement | HTMLElement | string | ReactChild | ReactNode;

interface DialogInterface {
  /** Opens the dialog */
  open: boolean;
  /** Function for handling the close action on the dialog */
  handleClose: any;
  /**The Dialog title */
  title: ElementType;
  children?: ReactNode
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        {...props}
        className="w-full md:w-[400px] lg:w-[500px] shadow-none"
      />
    </Draggable>
  );
}

const AppDialog = ({ open, handleClose, title, children }: DialogInterface) => {
  // const { open, handleClose, title }: DialogInterface = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default AppDialog;
