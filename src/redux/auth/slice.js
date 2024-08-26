import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser, refreshUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleRejected)

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, handleRejected)

      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;

        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
