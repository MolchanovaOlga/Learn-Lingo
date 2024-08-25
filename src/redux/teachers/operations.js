import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTeachers } from "../../services/apiTeachers";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (lastKey, thunkAPI) => {
    try {
      const data = await getTeachers(lastKey);

      const items = Object.entries(data)
        .map(([key, value]) => ({
          id: key,
          ...value,
        }))
        .slice(-4);

      return items;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
