import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchData } from "./options";

const initialState = {
  items: {
    location: {},
    forecast: [],
    current: {},
  },
  isLoading: false,
  error: null,
};

const pendingProcess = (state) => {
  state.isLoading = true;
};

const rejectError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "weatherDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, pendingProcess)
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.items.location = action.payload.location;
        state.items.forecast = action.payload.forecast.forecastday;
        state.items.current = action.payload.current;
      })
      .addCase(fetchSearchData.rejected, rejectError);
  },
});

export default slice.reducer;
