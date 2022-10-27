import { updateStart, updateSuccess, updateFailed } from './countriesSlice';

const url = "https://restcountries.com/v3.1/all"

const fetchCountriesData = async (dispatch) => {
  dispatch(updateStart());
  try {
    const response = await fetch(url);
    const data = await response.json()
    dispatch(updateSuccess(data));
  } catch (err) {
    dispatch(updateFailed());
  }
};

export default fetchCountriesData;