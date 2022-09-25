import { Container, Button, Typography, Chip } from "@mui/material";

const projects = [
  {
    email: 'bob@gmail.com',
    projectName: "EcoMobile",
    phoneNumber: '123-234-7890',
    industry: 'Automobile',
    description: 'Making Electric Veichle',
    rating: 7,
    requestedAmount: 200000,
  },
  {
    email: 'johnsnow@gmail.com',
    projectName: "ESolar",
    phoneNumber: '123-654-7890',
    industry: 'Energy',
    description: 'Making Solar Panel',
    rating: 6,
    requestedAmount: 500000,
  },
  {
    email: 'joe@gmail.com',
    projectName: "EElectronics",
    phoneNumber: '123-456-7890',
    industry: 'Electronics',
    description: 'Making more efficent electronics',
    rating: 4,
    requestedAmount: 30000,
  },
  {
    email: 'joe@gmail.com',
    projectName: "EElectronics",
    phoneNumber: '123-456-7890',
    industry: 'Electronics',
    description: 'Making more efficent electronics',
    rating: 4,
    requestedAmount: 30000,
  }
]

const itemList = () => { 
  let key = 0;
  return (projects.map(({ 
    projectName, 
    industry, 
    rating, 
    requestedAmount, 
    description 
  }) => {
    key += 1;
      return (
        <Button
          className="listItem"
          key={key}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "2rem",
            paddingX: "3rem",
            color: "#000",
            textTransform: "capitalize",
        }}>
          <div>
            <Typography sx={{ marginBottom: "5px" }} variant="h4" >{projectName}</Typography>
            <Chip label={industry} />
          </div>
          <Typography variant="body1">{description}</Typography>
          <div>
            <Typography>Amount: ${requestedAmount}</Typography>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
            }}>
              <Typography variant="body1">Eco Rating:</Typography>
              <Typography sx={{ marginLeft: "5px" }} variant="body1"> {rating}</Typography>
            </span>
          </div>
        </Button>
      );
    }
  ));
};

const Project = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
     {itemList()} 
    </Container>
  );
};

export default Project;
