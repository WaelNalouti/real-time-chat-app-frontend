import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,

  reducers: {
    fetchConversation: (state, action) => {
      //load fetched data to the g.state
      state.value.push([...action.payload]);
    },
    newMsg: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { fetchConversation, newMsg } = conversationSlice.actions;

export const selectConversation = (state) => state.conversation.value;

export default conversationSlice.reducer;
