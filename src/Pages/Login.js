import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  Toolbar,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import MainLayout from "../Layouts/MainLayout";
import LoginIllustration from "../Assets/images/loginImage.svg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Glider from "../Components/Glider";
const LoginPage = () => {
  const Footer = () => (
    <Box sx={{ bottom: "-8em", position: "relative" }}>
      <Typography variant="caption" textAlign="center">
        &copy; 2022 SmartPOS App
      </Typography>
    </Box>
  );
  const LoginForm = () => (
    <Box sx={{ marginTop: 18, paddingX: 10 }}>
      <Typography gutterBottom variant="h2" fontWeight="bold">
        Welcome Back!
      </Typography>
      <Typography variant="caption" gutterBottom>
        Please sign in to continue
      </Typography>
      <Box sx={{ width: 400 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          margin="dense"
          fullWidth
          placeholder="Enter ID Number"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          margin="dense"
          fullWidth
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" sx={{ width: "100%", marginY: 2 }}>
          <Typography variant="body1" fontWeight="bold">
            Sign in
          </Typography>
        </Button>
        <Typography textAlign="center">or</Typography>
        <Stack container spacing={2} direction="row">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              color: "#000",
            }}
            disableElevation
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              color: "#000",
            }}
            disableElevation
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
        </Stack>

        <Box
          textAlign="center"
          sx={{ marginY: 2, display: "flex", flexDirection: "column" }}
        >
          <Link
            href="#"
            sx={{ color: "#1e90ff", textDecoration: "none" }}
            fontSize="12px"
          >
            Forgot Password?
          </Link>

          <Typography variant="caption" sx={{ marginTop: 2 }}>
            Dont have an account? Go to Registration
          </Typography>
          <Footer />
        </Box>
      </Box>
    </Box>
  );

  const LoginIllustrationSection = () => (
    <Box sx={{ backgroundColor: "#F5F5F3", height: "100vh" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <BusinessCenterIcon color="logoColor" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          fontWeight="bold"
        >
          SmartPOS
        </Typography>
      </Toolbar>
      <Glider>
        <Box textAlign="center" component="div" className="glide__slide">
          <img src={LoginIllustration} alt="Login Illustration" width="80%" />
          <Typography variant="h3" fontWeight="bold">
            Manage Sales, Inventory <br />
            and other transactions
          </Typography>
        </Box>
        <Box textAlign="center" component="div" className="glide__slide">
          <img src={LoginIllustration} alt="Login Illustration" width="80%" />
          <Typography variant="h3" fontWeight="bold">
            Manage Sales, Inventory <br />
            and other transactions
          </Typography>
        </Box>
        <Box textAlign="center" component="div" className="glide__slide">
          <img src={LoginIllustration} alt="Login Illustration" width="80%" />
          <Typography variant="h3" fontWeight="bold">
            Manage Sales, Inventory <br />
            and other transactions
          </Typography>
        </Box>
      </Glider>
    </Box>
  );

  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <LoginIllustrationSection />
        </Grid>
        <Grid item sm={12} md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default LoginPage;
