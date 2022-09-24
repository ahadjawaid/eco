import { Button, Container } from "@mui/material";

const Login = () => {

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          href="/auth/google"
        >
          Log In with Google
        </Button>
      </Container>
    </div>
  );
};

export default Login;