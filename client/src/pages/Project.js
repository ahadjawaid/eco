import { Container, Typography } from "@mui/material";

const Project = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h3">
        Welcome to the project page!
      </Typography>
    </Container>
  );
};

export default Project;
