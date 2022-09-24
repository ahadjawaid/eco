import { Box, Button, Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';

const links = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon sx={{marginRight: '4px'}} />,
  },
  {
    name: "Project",
    link: "/project",
    icon: <ListAltIcon sx={{marginRight: '4px'}} />,
  },
  {
    name: "Fund",
    link: "/fund",
    icon: <AttachMoneyIcon sx={{marginRight: '4px'}} />,
  }
];

const isURL = (link) => {
  try {
    new URL(link);
    return true;
  } catch (TypeError) {
    return false;
  }
};

const renderLinks = () => {
  return links.map((linkObject, key) => {
    const name = linkObject.name;
    const link = linkObject.link;
    const icon = linkObject.icon;

    return isURL(link) ? (
      <Button
        className="button-side centerLogo"
        color="inherit"
        variant="text"
        key={key}
        element={Link}
        href={link}
      >
        {icon}
        {name}
      </Button>
    ) : (
      <Button
        className="button-side centerLogo"
        color="inherit"
        variant="text"
        key={key}
        component={LinkRouter}
        to={link}
      >
        {icon}
        {name}
      </Button>
    );
  });
};

const Sidebar = () => {
  return (
    <Box className="sidebar"
     sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Box 
        className="background-gradient-side"
        sx={{
          height: "95%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: "1rem",
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "50%",
        }}>
          {renderLinks()}
        </Box>
        <Button
          className="centerLogo"
          color="inherit"
          variant="text"
        >
          <LogoutIcon sx={{marginRight: '4px'}}  />
          <span>Sign Out</span>
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar