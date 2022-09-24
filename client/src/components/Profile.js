import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Button } from "@mui/material";

const Profile = () => {
  return (
    <div className='topbar'>
      <Button
      sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          color: "black",
      }}>
        <Typography variant='h5'>
          Ahad Jawaid
        </Typography>
        <AccountCircleIcon fontSize='large' sx={{ marginLeft: "7px"}}/>
      </Button>
    </div>
  );
}

export default Profile;