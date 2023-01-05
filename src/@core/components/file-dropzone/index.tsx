import React, { ChangeEventHandler } from 'react'
import Image from "next/image";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import UploadImage from "../../utils/images/imageSvg.png";

interface DropZoneInterface {
    /**
     * The Change event handler for the dropzone input
     */
    onChange: ChangeEventHandler<HTMLInputElement>
}

const FileDropzone = ({onChange}: DropZoneInterface) => {
  return (
    <label
      htmlFor="dropzone-file"
      className="relative flex flex-col justify-center items-center w-[inherit] h-[inherit] bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-default hover:bg-gray-50"
    >
      <div className="flex flex-col gap-5 justify-center items-center pt-5 pb-6">
        <Image src={UploadImage} alt="Upload" className="h-16 w-16" />
        <p className="mb-2 text-sm text-gray-500 text-center">
          <span className="mx-3 text-main-text">
            <CloudUploadOutlinedIcon />
          </span>
          Drop your file or
          <label
            htmlFor="dropzone-file"
            className="font-semibold pl-2 text-main-text cursor-pointer"
          >
            Browse
          </label>
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        multiple
        accept="image/*"
        onChange={onChange}
      />
    </label>
  );
}

export default FileDropzone