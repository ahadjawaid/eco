import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h3">
        Welcome to the home page!
      </Typography>
    </Box>
  );
};

export default Home;
