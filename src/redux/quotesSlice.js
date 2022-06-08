import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {},
});

export default quotesSlice.reducer;
