import { createSlice } from "@reduxjs/toolkit";
import { CHAT_OFFSET } from "../constants/apiConstants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
        state.messages.splice(CHAT_OFFSET,1)
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;