import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Client } from '../../../utils/interfaces/clientInterface';


type ClientsState = {
  clients: Client[];
};

const initialState: ClientsState = {
  clients: [],
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients(state, action: PayloadAction<Client[]>) {
      state.clients = action.payload;
    },
  },
});

export const { setClients } = clientsSlice.actions;

export default clientsSlice.reducer;
