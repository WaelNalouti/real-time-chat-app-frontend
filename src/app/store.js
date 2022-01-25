import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "../features/conversation/conversationSlice";

export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
  },
});
