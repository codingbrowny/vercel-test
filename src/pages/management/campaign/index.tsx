import React, { ChangeEvent } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { CampaignData } from "../../../core/utils/data";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import {
  AppDialog,
  DataTable,
  FileDropzone,
  PageHeader,
  TableFilters,
} from "../../../core/components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

const CampaignManagement = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { Column, Data } = CampaignData;

  const handleSelectedFiles = (e: ChangeEvent<HTMLInputElement>) => {
    //Creating an Array of files
  };

  /** Add Product Header Buttons */
  const CloseModalButtons = () => (
    <div className="flex items-center justify-end">
      <div className="flex gap-1 items-center">
        <IconButton aria-label="undo" size="small">
          <TurnLeftRoundedIcon className="scale-125 font-extralight" />
        </IconButton>
        <IconButton
          aria-label="close"
          size="small"
          onClick={() => setIsOpen(false)}
        >
          <CloseRoundedIcon className="scale-125 font-extralight" />
        </IconButton>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader title={"Campaign Management"}>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          variant="contained"
          className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md px-3"
        >
          Create Banner
        </Button>
      </PageHeader>
      <TableFilters />
      <DataTable data={Data} tableHeader={Column} />
      {/* Create Banner Modal */}
      <AppDialog
        open={isOpen}
        handleClose={undefined}
        title={<CloseModalButtons />}
      >
        <form>
          <div className="h-40">
            <FileDropzone onChange={handleSelectedFiles} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-3 gap-y-8 sm:gap-y-10 my-8 sm:my-10">
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#startTime"
                className="font-semibold mb-10 text-[15px]"
              >
                Start Time
              </label>
              <TextField
                type={"time"}
                size="small"
                className="w-full rounded-none"
                name="startTime"
                id="startTime"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#endTime"
                className="font-semibold mb-10 text-[15px]"
              >
                End Time
              </label>
              <TextField
                type={"time"}
                size="small"
                className="w-full rounded-none pl"
                name="endTime"
                id="endTime"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#startDate"
                className="font-semibold mb-10 text-[15px]"
              >
                Start Date
              </label>
              <TextField
                type={"date"}
                size="small"
                className="w-full rounded-none"
                name="startDate"
                id="startDate"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#endDate"
                className="font-semibold mb-10 text-[15px]"
              >
                End Date
              </label>
              <TextField
                type={"date"}
                variant="outlined"
                size="small"
                className="w-full rounded-none"
                name="endDate"
                id="endDate"
                sx={{
                  "& .MuiOutlinedInput-root": { borderRadius: 0 },
                }}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#placement"
                className="font-semibold mb-10 text-[15px]"
              >
                Placement
              </label>
              <Select
                labelId="placement-input-selection"
                id="placement"
                size="small"
                onChange={() => {}}
                className="w-full rounded-none"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"top"}>Top</MenuItem>
                <MenuItem value={"middle"}>Middle</MenuItem>
                <MenuItem value={"bottom"}>Bottom</MenuItem>
              </Select>
            </div>
            <div className="w-full sm:w-[48%]">
              <label
                htmlFor="#priority"
                className="font-semibold mb-10 text-[15px]"
              >
                Priority
              </label>
              <Select
                labelId="priority-input-selection"
                id="priority"
                size="small"
                onChange={() => {}}
                className="w-full rounded-none"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"low"}>Low</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"high"}>High</MenuItem>
              </Select>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-end my-8 md:mt-14">
            <Button
              onClick={() => {}}
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
              Publish
            </Button>
          </div>
        </form>
      </AppDialog>
    </>
  );
};

export default CampaignManagement;
