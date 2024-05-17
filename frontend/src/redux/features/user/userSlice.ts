import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


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

// Other code such as selectors can use the imported `RootState` type
//export const selectUser = (state: RootState) => state.userSlice.token

export default userSlice.reducer


