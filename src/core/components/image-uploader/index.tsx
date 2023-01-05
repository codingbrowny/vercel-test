import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import UploadIcon from "../../utils/images/upload.png";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

/** Image uploading/uploaded component preview component */
const ImageUploader = ({
  name,
  src,
  size,
  onDelete,
  id,
}: {
  name: string;
  src: string;
  size: number | string;
  id?: string;
  onDelete: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  return (
    <Box
      sx={{ paddingX: 2, paddingY: 2, border: 1.4, marginY: 3 }}
      className="border-gray-400 max-h-full flex gap-5 items-center justify-between"
    >
      <div className="flex flex-1 gap-5 overflow-hidden">
        <div className="flex flex-col justify-center">
          <Image
            src={isLoading ? UploadIcon : src}
            alt="up-icon"
            width={50}
            height={50}
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="flex flex-col gap-1 relative w-full">
          <p className="img-name relative text-sm text-primary-black overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </p>
          {isLoading && (
            <LinearProgress
              variant="determinate"
              value={50}
              color="success"
              className="rounded-r-full rounded-l-full w-full"
            />
          )}
          <p className="upload-stat text-sm text-primary-black">{size}</p>
        </div>
      </div>
      {/* Cancel or Delete Button */}
      <div className="">
        <IconButton onClick={onDelete} id={id}>
          <DeleteOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default ImageUploader;
