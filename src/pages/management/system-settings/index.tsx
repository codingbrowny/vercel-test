import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import {
  InviteUser,
  SystemUser,
  RemoveMember,
  RevokeInvite,
} from "../../../@core/components";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const SystemSettingPage = () => {
  const [modalOpened, setModalOpened] = useState({
    invite: false,
    remove: false,
    revoke: false,
  });
  const [value, setValue] = useState("1");
  const [displayPreference, setDisplayPreference] = useState({
    language: "en",
    font: "times-new-roman",
    fontSize: 12,
  });
  /** Tab Switch Handlers */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  /** Preference selection handler */
  const handleDisplayPreference = (e: SelectChangeEvent) => {
    setDisplayPreference((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleInviteModal = () => {
    setModalOpened((prev) => {
      return { ...prev, invite: !modalOpened.invite };
    });
  };
  const handleRemoveModal = () => {
    setModalOpened((prev) => {
      return {
        ...prev,
        remove: !modalOpened.remove,
      };
    });
  };
  const handleRevokeModal = () => {
    setModalOpened((prev) => {
      return {
        ...prev,
        revoke: !modalOpened.revoke,
      };
    });
  };

  return (
    <>
      <InviteUser
        open={modalOpened.invite}
        closeButtonClick={handleInviteModal}
      />
      <RemoveMember
        open={modalOpened.remove}
        closeButtonClick={handleRemoveModal}
      />
      <RevokeInvite open={modalOpened.revoke} closeButtonClick={handleRevokeModal} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="User Management Tabs"
              className="overflow-hidden overflow-x-auto"
            >
              <Tab
                value="1"
                label={
                  <Typography className="capitalize tracking-tight">
                    Display Preference
                  </Typography>
                }
                className="capitalize font-semibold"
              />
              <Tab
                value="2"
                label={
                  <Typography className="capitalize tracking-tight">
                    User
                  </Typography>
                }
                className="capitalize font-semibold"
              />
              <Tab
                value="3"
                label={
                  <Typography className="capitalize tracking-tight">
                    Notifications
                  </Typography>
                }
                className="capitalize font-semibold"
              />
            </Tabs>
          </Box>
          {/* Customers Tab */}
          <TabPanel value="1">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-12 w-fit md:py-5">
              <FormControl className="language">
                <p className="text-md mb-2 font-semibold">Language</p>
                <Select
                  className="bg-white
              h-10
              text-sm
              border-none
              rounded-sm
              hover:border-0
              outline-none"
                  labelId="language-select-label"
                  id="language-select"
                  value={displayPreference.language}
                  onChange={handleDisplayPreference}
                  name="language"
                >
                  <MenuItem value={"en"} className="text-sm">
                    English
                  </MenuItem>
                  <MenuItem value={"fr"} className="text-sm">
                    French
                  </MenuItem>
                  <MenuItem value={"sp"} className="text-sm">
                    Spanish
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="time-format">
                <p className="text-md mb-2 font-semibold">Time Format</p>
                <RadioGroup
                  row
                  aria-labelledby="time-format-radio-buttons"
                  name="time-format"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={<span className="text-gray-700 text-md">12hrs</span>}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label={<span className="text-gray-700 text-md">24hrs</span>}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl className="date-format">
                <p className="text-md mb-2 font-semibold">Date Format</p>
                <RadioGroup
                  row
                  aria-labelledby="date-format-radio-buttons"
                  name="date-format"
                  className="text-sm"
                >
                  <FormControlLabel
                    value="DD-MM-YYY"
                    control={<Radio />}
                    label={
                      <span className="text-gray-700 text-sm">DD-MM-YYY</span>
                    }
                  />
                  <FormControlLabel
                    value="DD/MM/YYY"
                    control={<Radio />}
                    label={
                      <span className="text-gray-700 text-sm">DD/MM/YYY</span>
                    }
                  />
                  <FormControlLabel
                    value="MM/DD/YYY"
                    control={<Radio />}
                    label={
                      <span className="text-gray-700 text-sm">DD/MM/YYY</span>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <FormControl className="font-select">
                <p className="text-md mb-2 font-semibold">Font</p>
                <Select
                  className="bg-white
              h-10
              text-sm
              border-none
              rounded-sm
              hover:border-0
              outline-none"
                  labelId="language-select-label"
                  id="language-select"
                  value={displayPreference.font}
                  onChange={handleDisplayPreference}
                  name="font"
                >
                  <MenuItem value={"times-new-roman"} className="text-sm">
                    Times New Romans
                  </MenuItem>
                  <MenuItem value={"roboto"} className="text-sm">
                    Roboto
                  </MenuItem>
                  <MenuItem value={"poppins"} className="text-sm">
                    Poppins
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="font-select">
                <p className="text-md mb-2 font-semibold">Font Size</p>
                <Select
                  className="bg-white
                  text-sm
              h-10
              border-none
              rounded-sm
              hover:border-0
              outline-none"
                  labelId="language-select-label"
                  id="language-select"
                  value={displayPreference.fontSize}
                  onChange={() => {}}
                  name="font-size"
                >
                  <MenuItem value={12} className="text-sm">
                    Small
                  </MenuItem>
                  <MenuItem value={16} className="text-sm">
                    Medium
                  </MenuItem>
                  <MenuItem value={20} className="text-sm">
                    Large
                  </MenuItem>
                </Select>
              </FormControl>
              <div className="flex gap-2 items-center my-3">
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
                  Preview
                </Button>
              </div>
            </div>
          </TabPanel>
          {/* Sellers Tab */}
          <TabPanel value="2">
            <div className="grid grid-cols-1 place-content-between gap-10 divide-y md:space-y-10">
              <section className="flex flex-col md:flex-row justify-between">
                <div className="md:basis-1/3">
                  <h2 className="font-semibold tracking-wide">Users</h2>
                  <p className="my-3 text-sm text-opacity-80 leading-relaxed">
                    Custom Roles can be created or modified by a Super Admin or
                    an Admin with the User Management & Roles permission. Admins
                    can then specify the Permissions of the Custom Role.
                  </p>
                  <Button
                    onClick={handleInviteModal}
                    variant="contained"
                    className="mt-8 shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize hover:shadow-md px-5"
                  >
                    Invite Users
                  </Button>
                </div>
                <div className="md:basis-2/5">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <SystemUser
                        key={index}
                        name={"Emerald Quashie"}
                        email={"emerald@erogana@com"}
                      >
                        <div className="flex items-center gap-1">
                          <Select
                            className="bg-white h-9 rounded-none text-sm"
                            labelId="language-select-label"
                            id="language-select"
                            name="font-size"
                            value={"admin"}
                            onChange={() => {}}
                          >
                            <MenuItem value={"admin"} className="text-sm">
                              Administrator
                            </MenuItem>
                            <MenuItem value={"super_admin"} className="text-sm">
                              Super Admin
                            </MenuItem>
                          </Select>
                          <IconButton onClick={handleRemoveModal}>
                            <DeleteOutlinedIcon />
                          </IconButton>
                        </div>
                      </SystemUser>
                    ))}
                </div>
              </section>
              <section className="flex flex-col md:flex-row justify-between mt-5 md:py-12">
                <div className="md:basis-1/3">
                  <h2 className="font-semibold tracking-wide">Pending Users</h2>
                  <p className="my-3 text-sm text-opacity-80 leading-relaxed">
                    Invitations waiting acceptance or decline
                  </p>
                </div>
                <div className="md:basis-2/5">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <SystemUser
                        key={index}
                        name={"Emerald Quashie"}
                        email={"emerald@erogana@com"}
                      >
                        <div className="flex items-center gap-2">
                          <Button
                            className="text-sm bg-gray-300 hover:bg-gray-400 capitalize text-slate-900 rounded-none"
                            onClick={() => {}}
                          >
                            Resend invite
                          </Button>
                          <Button
                            variant="outlined"
                            className="text-sm capitalize text-main-text hover:bg-primary-bg hover:text-white rounded-none"
                            onClick={handleRevokeModal}
                          >
                            Cancel Invite
                          </Button>
                        </div>
                      </SystemUser>
                    ))}
                </div>
              </section>
            </div>
          </TabPanel>
          <TabPanel value="3">Notification Panel</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default SystemSettingPage;
