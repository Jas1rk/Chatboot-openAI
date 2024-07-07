import { createSlice } from "@reduxjs/toolkit";
import { sendChat, getChats } from "./chatThunk";

const INITIAL_STATE = {
  chats: [],
  status: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(sendChat.fulfilled, (state, action) => {
        state.chats.push(action.payload.userMessage);
        state.chats.push(action.payload.botMessage);
      })
      .addCase(getChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.chats = action.payload;
        state.status = "success";
      })
      .addCase(getChats.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default chatSlice.reducer;
