import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";
const MainLayout = ({ children }) => {
  return (
    <main>
      {children}
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}></Grid>
        <Grid item sm={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            Footer
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default MainLayout;
