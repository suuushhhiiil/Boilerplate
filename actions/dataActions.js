import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchData = () => async (dispatch) => {
    // const dispatch = useDispatch();
  try {
    const res = await axios.get("https://dev-gcyzrdgg5jghsv4.api.raw-labs.com/mock/json-api");
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
  }
};
