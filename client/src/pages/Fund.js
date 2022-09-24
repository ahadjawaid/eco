import { Container, Typography } from "@mui/material";

const Fund = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h3">
        Welcome to the fund page!
      </Typography>
    </Container>
  );
};

export default Fund;
