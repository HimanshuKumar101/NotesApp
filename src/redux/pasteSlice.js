
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes") || "[]"),
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      if (!paste || !paste._id) {
        toast.error("Invalid paste data");
        return;
      }

      const index = state.pastes.findIndex((item) => item?._id === paste._id);
      if (index >= 0) {
        toast.error("Paste already exists");
        return;
      }

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste added");
    },

    updatePastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item?._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated");
      } else {
        toast.error("Paste not found");
      }
    },

    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item?._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      } else {
        toast.error("Paste not found");
      }
    },

    resetPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared");
    },
  },
});

export const { addToPastes, removeFromPastes, updatePastes, resetPaste } = pasteSlice.actions;
export default pasteSlice.reducer;
