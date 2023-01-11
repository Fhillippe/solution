import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorInterface } from "../color/color";

interface ModalState {
  display: boolean;
  currentModal: ColorInterface;
}
const initialState: ModalState = {
  display: false,
  currentModal: {
    id: 1,
    name: "",
    year: "",
    color: "",
    pantoneValue: "",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state) => {
      state.display = true;
    },
    hideModal: (state) => {
      state.display = false;
    },
    setModal: (state, action: PayloadAction<ColorInterface>) => {
      state.currentModal = action.payload;
    },
  },
});

export const { setModal, displayModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
