import { TEMP_CASE_1 } from "../actions/types";

const tempReducer = (state = null, action) => {
  switch (action.type) {
    case TEMP_CASE_1:
      return action.payload || false;
    default:
      return state;
  }
};

export default tempReducer
