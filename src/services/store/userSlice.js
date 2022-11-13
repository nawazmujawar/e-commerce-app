import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { hasLogged: false },
  reducers: {
    setUserLogged(state, action) {
      state.hasLogged = action.payload;
    },
  },
});

export const { setUserLogged } = userSlice.actions;
export default userSlice.reducer;
