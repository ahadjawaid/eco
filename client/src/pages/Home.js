import { Box, Button, Typography, Link } from "@mui/material";
import "../styles/home.scss";
import logo from '../assets/logo.svg';
import people from "../assets/people.svg";
import googleLogo from '../assets/google_logo.svg';
import profile from "../assets/profile.svg";

const Home = () => {
  return (
    <div className="grid-wrapper-home">
      <div className="leftSide">
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}>
          <img className="logo" src={logo} alt="company" />
          <img src={people} style={{ marginBottom: "3rem" }} alt="people" />
          <Typography variant="h4" className="slogan">Love Eco, Love Earth</Typography>
        </Box>
      </div>
      <div className="rightSide">
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          height: "95%",
          width: "100%",
        }}>
          <img src={profile} style={{ marginBottom: "1.5rem" }} alt="profile" />
          <Typography variant="h4" sx={{marginBottom: '2rem'}}>Welcome!</Typography>
          <Button
            variant="contained"
            className="button-gradient"
            component={Link}
            href="/auth/google"
          >
            <img src={googleLogo} style={{ marginRight: "1rem" }} alt="google" />
            <Typography color="#19416F">Login with Google</Typography>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Home;
