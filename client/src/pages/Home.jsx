import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <AppLayout>
      <Box bgcolor={grayColor} height={"100%"}>
        <Typography p={"2rem"} variant="h5" textAlign={"center"}>
          Select a friend to chat
        </Typography>
      </Box>
    </AppLayout>
  );
};

export default Home;
