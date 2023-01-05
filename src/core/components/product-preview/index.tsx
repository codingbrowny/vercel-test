import React, { MouseEventHandler } from "react";
import IconButton from "@mui/material/IconButton";
import AppDialog from "../dialog";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
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

const ProductPreview = ({
  handleClose,
  open,
  closeButtonClick,
  undoButtonClick,
}: PreviewInterface) => {
  const PreviewTitle = () => (
    <div className="flex justify-between items-center">
      <h2 className="page-name text-lg font-semibold text-primary-black">
        <span>Add Product</span>
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
    <AppDialog open={open} handleClose={handleClose} title={<PreviewTitle />}>
      <div className="relative product-details">
        <div className="my-3 md:mb-8">
          <h2 className="name text-primary-black tracking-tight">
            Product Name
          </h2>
          <p className="content text-sm my-1 text-gray-500">Nike Airfoce</p>
        </div>
        <div className="my-3 md:mb-8">
          <h2 className="name text-primary-black tracking-tight">Category</h2>
          <p className="content text-sm my-1 text-gray-500">Men</p>
        </div>
        <div className="my-3 md:mb-8">
          <h2 className="name text-primary-black tracking-tight">
            Sub - Category
          </h2>
          <p className="content text-sm my-1 text-gray-500">Shoe</p>
        </div>
        <div className="my-3 md:mb-8">
          <h2 className="name text-primary-black tracking-tight">
            Description
          </h2>
          <p className="content text-sm my-1 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            libero ut incidunt vitae itaque recusandae reiciendis, autem quaerat
            maiores saepe tempora praesentium pariatur quo atque voluptate animi
            consequuntur? Quia, nesciunt.
          </p>
        </div>
        <div className="my-3 md:mb-8">
          <h2 className="name text-primary-black tracking-tight">Tags</h2>
          <div className="relative my-1 rounded-sm transition-all duration-300 border min-h-[70px]"></div>
        </div>
      </div>

      <Button
        className="shadow-none bg-primary-bg text-white px-5 mb-5 rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md"
        onClick={() => {}}
      >
        Publish
      </Button>
    </AppDialog>
  );
};

export default ProductPreview;
