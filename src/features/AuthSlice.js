import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  token: null,
};

const loginUser = createAsyncThunk(
  "users/loginUser",
  async (addedUser, { rejectWithValue }) => {
    const response = await axios.post(
      "https://dummyjson.com/docs/auth",
      addedUser
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      // state.products.push(action.payload)
      state.users = action.payload;
      const { token } = action.payload;
      localStorage.setItem("authToken", token);
      state.token = token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
