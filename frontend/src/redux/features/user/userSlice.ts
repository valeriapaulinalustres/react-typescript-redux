import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserState {
  value: {

    email: string,
    first_name: string,
    last_name: string,
    token: string
  }
}

const initialState: UserState = {
value:{
  email: "",
  first_name: "",
  last_name: "",
  token: ""
}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
        state.value = action.payload.value;
      },
  },
})

export const { setUser } = userSlice.actions


export default userSlice.reducer


