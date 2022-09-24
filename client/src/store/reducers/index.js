import tempReducer from "./tempReducer";
import authReducer from "./authReducer";

const states = {
  auth: authReducer,
  temp: tempReducer,
};

export default states;