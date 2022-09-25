import { createSlice } from '@reduxjs/toolkit'

const initialValue =
{
  myID_Clients: 'Apps_000000003',
  signed: true,
  regular_fee: 40,
  cheking_days: 15,
  high_priority: 50,
  midle_priority: 40,
  low_priority: 30,
  manager: 'Иванов Иван Иваныч'
};

const agreementSlice = createSlice({
  name: 'agreement',
  initialState: initialValue,
  reducers: {
    updateAgreement: (state, action) => {
      return [...state, action.agreement];
    },
    resetAgreement: (initialState) => {console.log('2',initialValue);
            return initialValue
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAgreement, resetAgreement  } = agreementSlice.actions

export default agreementSlice.reducer
 //export const selectAgreement = state => state.agreement;