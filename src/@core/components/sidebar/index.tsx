import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { SidebarLinks } from "../../utils/data";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState<boolean>();

  const router = useRouter();

  const { mainLinks, managementLinks } = SidebarLinks;

  // Links Styling
  const linkStyle =
    "w-full p-2.5 relative cursor-pointer";
  const activeLinkStyle =
    linkStyle + " text-main-text border-r-[3px] border-r-red-500";

  return (
    <>
      <h3 className="brand uppercase tracking-tight text-main-text font-bold text-center">
        erogana
      </h3>
      <MenuList className="side-links relative w-full md:w-[75%] md:float-right mt-7 md:mt-12">
        {mainLinks.map((link, index) => (
          <MenuItem
            key={index}
            disabled={link.disabled}
            className={
              router.pathname === link.path ? activeLinkStyle : linkStyle
            }
            sx={
              router.pathname === link.path
                ? {
                    borderRight: 1,
                  }
                : {}
            }
          >
            <Link href={link.path} className="w-full">
              <span className="flex item-center gap-4 relative w-full">
                <link.icon />
                {link.linkName}
              </span>
            </Link>
          </MenuItem>
        ))}
      </MenuList>

      {/* Management Section */}
      <div className="side-links relative md:w-[75%] md:float-right mt-7 md:mt-12">
        <Button variant="text" onClick={() => setIsOpened(!isOpened)}>
          <Typography className="capitalize">
            Management{" "}
            {isOpened ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </Typography>
        </Button>
        {isOpened && (
          <MenuList dense className="transition-all duration-500">
            {managementLinks.map((link, index) => (
              <MenuItem
                key={index}
                disabled={link.disabled}
                className={
                  router.pathname === link.path
                    ? "relative w-full text-main-text border border-r-[3px] border-r-border-main"
                    : "relative w-full"
                }
                sx={
                  router.pathname === link.path
                    ? {
                        borderRight: 1,
                      }
                    : {}
                }
              >
                <Link href={link.path} className="w-full">
                  <span>{link.linkName}</span>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        )}
      </div>
    </>
  );
};

export default Sidebar;
