import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { localhostUrl } from "../Service/baseUrl";

export const sendChat = createAsyncThunk("chat/sendChat", async (chats) => {
  const response = await axios.post(`${localhostUrl}/chat`, { chats });
  console.log("sending to backend", response.data);
  return response.data;
});

export const getChats = createAsyncThunk("chaat/getChats", async () => {
  const response = await axios.get(`${localhostUrl}/chat`);
  return response.data;
});
