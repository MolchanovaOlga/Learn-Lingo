import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    lastKey: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;

        state.items = [...state.items, ...action.payload];
        state.lastKey = action.payload[action.payload.length - 1].id;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const teachersReducer = teachersSlice.reducer;
