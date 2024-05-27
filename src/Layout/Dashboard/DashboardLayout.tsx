import NavBar from "@components/NavBar";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default DashboardLayout;