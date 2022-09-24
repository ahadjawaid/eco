import axios from "axios";
import { FETCH_USER, TEMP_CASE_1 } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: response.data });
}

export const fetchTempData = () => dispatch => {
  const response = { data: { id: 1, name: "bob" } };

  dispatch({ type: TEMP_CASE_1, payload: response.data });
};
