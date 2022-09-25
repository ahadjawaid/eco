import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h3">
        Welcome!
      </Typography>
    </Container>
  );
};

export default Dashboard;
