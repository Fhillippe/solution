import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";

const endPoint = "https://reqres.in/api/products";

interface PageState {
  currentPage: React.ReactElement[];
  pageNumber: number;
  pageLoading: boolean;
  pageError: boolean;
  totalPages: number;
}
const initialState: PageState = {
  currentPage: [],
  pageNumber: 1,
  pageLoading: false,
  pageError: false,
  totalPages: 0,
};
export const loadPage = createAsyncThunk(
  "pages/loadPage",
  async (params?: string[]) => {
    let queryString = endPoint;
    if (params) {
      const paramsString = params.join("&");
      queryString += "?" + paramsString;
    }

    const response = await fetch(queryString);
    if (response.status !== 200) {
      throw new Error(`Site responed with status ${response.status}`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    shiftLeft: (state) => {
      state.pageNumber -= 1;
    },
    shiftRight: (state) => {
      state.pageNumber += 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadPage.pending, (state) => {
        state.pageLoading = true;
        state.pageError = false;
      })
      .addCase(loadPage.fulfilled, (state, action) => {
        state.pageLoading = false;
        state.pageError = false;
        state.totalPages = action.payload.total_pages || 1;
        state.currentPage = [action.payload.data].flat();
      })
      .addCase(loadPage.rejected, (state, action) => {
        state.pageLoading = false;
        state.pageError = true;
      });
  },
});

export const { shiftLeft, shiftRight } = pageSlice.actions;
export default pageSlice.reducer;
