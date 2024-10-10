import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.weatherapi.com/v1";
const API_KEY = "742d9d8120844e4abd0141650240810";

export const fetchSearchData = createAsyncThunk(
  "data/fetchStartData",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get("/forecast.json", {
        params: {
          key: API_KEY,
          q: query,
          days: 6,
        },
      });
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
