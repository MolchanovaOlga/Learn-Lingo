import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../services/firebaseConfig";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      return { uid: user.uid, email: user.email, name: user.displayName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return { uid: user.uid, email: user.email, name: user.displayName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const serializedUser = {
              uid: user.uid,
              email: user.email,
              name: user.displayName,
            };

            resolve(serializedUser);
          } else {
            reject(new Error("User not authenticated"));
          }
        });
      });
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
