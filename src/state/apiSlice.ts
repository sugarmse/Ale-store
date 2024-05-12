import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

// Define the shape of the API state
interface ApiState {
  data: any[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: ApiState = {
  data: [],
  loading: false,
  error: null,
};

// Define an async thunk for fetching data
export const fetchData = createAsyncThunk(
  'api/fetchData',
  async () => {
    try {
      const response = await axios.get<any[]>('https://api.sampleapis.com/beers/ale');
  console.log(response.data);

	  return response.data;

    } catch (error) {
      throw error;
    }

  }
);

// Create a slice for handling data
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

// Export actions and reducer
export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;

// Define a selector to access the data state
export const selectData = (state: RootState) => state.data;
