import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorInterface {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
}

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
    pantone_value: "",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state) => {
      state.display = true;
      const toBlur = document.querySelector(".page");
    },
    hideModal: (state) => {
      state.display = false;
      document.querySelector(".App")?.classList.remove("blur");
    },
    setModal: (state, action: PayloadAction<ColorInterface>) => {
      state.currentModal = action.payload;
    },
  },
});

export const { setModal, displayModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
