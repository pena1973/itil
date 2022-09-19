import { createSlice } from '@reduxjs/toolkit'

// типы дейсвий изменения состояния
const UPD_AGR = 'agreementReducer/UPD_AGR'; // обновление соглашения


const initialValue = 
  {
    myID_Clients:'Apps_000000003', 
    signed: true,
    regular_fee: 30,
    cheking_days: 10,
    high_priority: 50,
    midle_priority: 40,
    low_priority: 30,
    manager: 'Иванов Иван Иваныч'
   };

   const clientsSlice = createSlice({
    name: 'agreement',
    initialState: initialValue,
    reducers: {
      upDate: (state, action) => {
        return [...state, action.agreement];
      },
    },
  })

// Action creators are generated for each case reducer function
export const { upDate } = clientsSlice.actions

export default clientsSlice.reducer
export const selectAgreement = state => state.agreement;