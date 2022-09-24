import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h3">
        Welcome to the about page!
      </Typography>
    </Container>
  );
};

export default About;
