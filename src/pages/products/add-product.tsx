import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, IconButton, Chip } from "@mui/material";
import UploadImage from "../../core/utils/images/imageSvg.png";
import {
  InputField,
  PageHeader,
  ImageUploader,
  ProductPreview,
  FileDropzone,
} from "../../core/components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import { getFileDetails, returnSize } from "../../core/utils/file-size-calc";

/** Add Product Header Buttons */
const CancelAddProductBtns = () => (
  <div className="flex gap-1 items-center">
    <IconButton aria-label="undo">
      <TurnLeftRoundedIcon className="scale-125 font-extralight" />
    </IconButton>
    <IconButton aria-label="close">
      <CloseRoundedIcon className="scale-125 font-extralight" />
    </IconButton>
  </div>
);

/**Add Product Page */
const AddProduct = () => {
  const [tags, setTags] = useState(["men", "shoe"]);
  // Hooks for previewing added product
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedImages, setSelectedImages] = useState<
    ReturnType<typeof returnSize>[]
  >([]);
  /**Form Submit Handler */
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleClosePreview = () => {
    setIsOpen(false);
  };

  // Handling selected files submiited
  const handleSelectedFiles = (e: ChangeEvent<HTMLInputElement>) => {
    //Creating an Array of files
    const selectedFilesArray = Array.from(e.target.files);
    const selectedFiles = selectedFilesArray.map((file) => {
      return getFileDetails(file);
    });
    setSelectedImages((prev) => prev.concat(...selectedFiles));
  };

  const removeImage = (e) => {
    setSelectedImages(
      selectedImages.filter((image) => {
        return image.src !== e.currentTarget.id;
      })
    );
  }

  return (
    <>
      <PageHeader title={"Add Product"} children={<CancelAddProductBtns />} />

      {/* Product Preview Dialog */}
      <ProductPreview open={isOpen} closeButtonClick={handleClosePreview} />

      {/* Add Product Field */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <div className="w-full relative">
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Product Name"
            />
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Categories"
              rightComponent={
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              }
            />
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Sub - Categories"
              rightComponent={
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              }
            />
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Brand Name"
            />
            <InputField inputType={"text"} label="Price" onChange={() => {}} />
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Brand Name"
            />
            <div className="block">
              <label
                htmlFor="message"
                className="block tracking-tight text-primary-text"
              >
                Description
              </label>
              <textarea
                id="message"
                rows={4}
                className="p-2.5 text-sm relative rounded-sm w-full md:w-[400px] lg:w-[500px] transition-all duration-300 border outline-none border-gray-300 focus:border-gray-400"
              ></textarea>
            </div>
            <InputField
              onChange={() => {}}
              inputType={"text"}
              label="Tags"
              placeholder="Type to create tag"
              onSubmit={() => {}}
            />
            <div className="tags relative rounded-sm w-full md:w-[400px] lg:w-[500px] transition-all duration-300 border min-h-[70px]">
              <div className="relative max-w-full flex gap-3 item-center p-2 overflow-hidden">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onClick={() => {}}
                    onDelete={() => {}}
                    component={"div"}
                    sx={{
                      "& .MuiChip-deleteIcon": {
                        color: "white",
                      },
                    }}
                    className="bg-processing text-white hover:bg-processing"
                  />
                ))}
              </div>
            </div>
            <div className="hidden sm:block items-center my-8">
              <Button
                onClick={() => {}}
                variant="outlined"
                className="rounded-none font- capitalize bg-white border-gray-400 text-primary-black text-opacity-75 hover:text-main-text px-5 mr-3"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsOpen(true)}
                variant="contained"
                className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg px-5 capitalize hover:shadow-md"
              >
                Preview
              </Button>
            </div>
          </div>

          {/* DropZone and Upload Preview */}
          <div className="relative w-full sm:w-3/4 md:w-3/5 lg:mr-20">
            <p className="upload-stat text-primary-black mb-2">Add Image</p>
            <div className="h-64">
              <FileDropzone onChange={handleSelectedFiles} />
            </div>
            {selectedImages &&
              selectedImages.map((item, index: React.Key) => {
                return (
                  <ImageUploader
                    key={index}
                    name={item.name}
                    src={item.src}
                    size={item.formattedSize}
                    id={item.src}
                    onDelete={removeImage}
                  />
                );
              })}
          </div>

          <div className="sm:hidden items-center my-5">
            <Button
              onClick={() => {}}
              variant="outlined"
              className="rounded-none font- capitalize bg-white border-gray-400 text-primary-black text-opacity-75 hover:text-main-text px-5 mr-3"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              variant="contained"
              className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md px-5"
            >
              Preview
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
