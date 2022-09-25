import { useState } from "react";
import { Container, Button, Typography, Chip, Backdrop } from "@mui/material";
import Modal from "../components/Modal";

const funds = [
  {
    email: 'bob@gmail.com',
    companyName: "Google",
    phoneNumber: '123-234-7890',
    industries: ['Automobile', "Energy"],
    fundAmount: 200000,
    endDate: "01-12-22",
  },
  {
    email: 'johnsnow@gmail.com',
    companyName: "Goldman Sachs",
    phoneNumber: '123-654-7890',
    industries: ['Energy', "Mining"],
    fundAmount: 500000,
    endDate: "01-12-22",
  },
  {
    email: 'joe@gmail.com',
    companyName: "State Farm",
    phoneNumber: '123-456-7890',
    industries: ['Energy', "Electronics"],
    fundAmount: 30000,
    endDate: "01-12-22",
  },
  {
    email: 'joe@gmail.com',
    companyName: "Lockheed Martin",
    phoneNumber: '123-456-7890',
    industries: ['Energy', 'Electronics'],
    fundAmount: 30000,
    endDate: "01-12-22",
  }
]

const itemList = (handleToggle) => { 
  let key = 0;
  return (funds.map((fundObj) => {
    key += 1;
      return (
        <Button
          className="listItem"
          key={key}
          onClick={handleToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "2rem",
            paddingX: "3rem",
            color: "#000",
            textTransform: "capitalize",
        }}>
          <div style={{ maxWidth: "40%" }}>
            <Typography variant="h4" sx={{ marginBottom: "5px" }} >{fundObj.companyName}</Typography>
            <div style={{ display: "flex"}}>
              {fundObj.industries.map((industry, key) => {
                return <Chip sx={{ marginRight: "5px"}} label={industry} />
              })}
            </div>
            
          </div>
          <Typography variant="body1">Due Date: {fundObj.endDate}</Typography>
          <div>
            <Typography>Amount: ${fundObj.fundAmount}</Typography>
          </div>
        </Button>
      );
    }
  ));
};

const Fund = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    console.log(e)
    setOpen(!open);
  };

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
   {itemList(handleToggle)} 
   <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Modal>
        <div>
          
        </div>
      </Modal>
    </Backdrop>
  </Container>
  );
};

export default Fund;
