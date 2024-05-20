import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InboundCase } from '../../../utils/interfaces/inboundCaseInterfase';


type InboundCasesState = {
  filteredCases: InboundCase[];
};

const initialState: InboundCasesState = {
  filteredCases: [],
};

const inboundCasesSlice = createSlice({
  name: 'inboundCases',
  initialState,
  reducers: {
    setFilteredCases(state, action: PayloadAction<InboundCase[]>) {
      state.filteredCases = action.payload;
    },
  },
});

export const { setFilteredCases } = inboundCasesSlice.actions;

export default inboundCasesSlice.reducer;
