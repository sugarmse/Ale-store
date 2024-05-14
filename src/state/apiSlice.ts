import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      const response = await axios.get<any[]>('https://api.sampleapis.com/wines/reds');
  console.log(response.data);

	  return response.data;

    } catch (error) {
      throw error;
    }

  }
);

// Create a slice for handling data
const dataSlice = createSlice({
  name: 'wine',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
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

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const selectData = (state: { wine: ApiState }) => state.wine.data;
export const selectLoading = (state: { wine: ApiState }) => state.wine.loading;
export const selectError = (state: { wine: ApiState }) => state.wine.error;

export default dataSlice.reducer;
