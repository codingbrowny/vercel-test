import React, { useState } from "react";
import { Navbar, Sidebar, Spinner } from "../components";
import Router from "next/router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer } from "@mui/material";
import { useWindowSize } from "../hooks/useWindowSize";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  //Destructring window width
  const { width } = useWindowSize();

  const sidebarDisplayHandler = () => setShowSidebar((prev) => !prev);

  // Handler for when a route change starts
  const changeStartHandler = (url) => {
    url !== Router.asPath && setLoading(true);
    setShowSidebar(false);
  };
  // Handler for when a route change is done
  const changeCompleteHandler = (url) =>
    url === Router.asPath && setLoading(false);

  Router.events.on("routeChangeStart", changeStartHandler);
  Router.events.on("routeChangeComplete", changeCompleteHandler);
  Router.events.on("routeChangeError", changeCompleteHandler);

  // Drawer handler
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      sidebarDisplayHandler();
    };

  return (
    <div className="relative bg-main-bg flex h-screen max-h-full overflow-hidden">
      {width >= 1280 ? (
        <aside
          className={
            "w-72 lg:-w-80 h-screen bg-sidebar-bg py-5 sm:py-10 md:py-16 hidden xl:block transition-[display] duration-300"
          }
        >
          <Sidebar />
        </aside>
      ) : (
        <Drawer anchor="left" open={showSidebar} onClose={toggleDrawer}>
          <Box
            className="w-64 lg:-w-80 h-screen bg-sidebar-bg py-10 md:py-16"
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Sidebar />
          </Box>
        </Drawer>
      )}
      <div className="relative content w-full p-2 sm:p-4 md:px-10 overflow-hidden overflow-y-auto">
        {loading && (
          <div className="absolute h-screen max-h-full w-full max-w-full flex items-center justify-center z-10 bg-white/40">
            <Spinner />
          </div>
        )}
        <div className="relative flex items-center gap-3">
          <IconButton
            className="bg-gray-400/20 hover:bg-gray-400/30 xl:hidden"
            onClick={sidebarDisplayHandler}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </div>
        <div className="relative mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
