import { createSlice, createAction } from '@reduxjs/toolkit'
// saga
export const fetchAgreement = createAction('agreement/FETCH_AGREEMENT');

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
    fetchedAgreement: (_state, action) => {
      //_state  - не используем  а палочка чтоб не
      console.log('action.payloadr', action.payload);
      //console.log('fetchAgreement action', action);
      // action.payload -  это и есть те самые загруженные данные с сервера
     // return action.payload; //[...]
     return action.payload; 
    },
    fetchAgreementError: (_state, action) => {
      console.log('fetch agreement error', action.payload);
      // если какаято ошибка при загрузrке с сервера вернем неопределено - данные клиента не загружены
      return undefined;
    },
    resetAgreement: (initialState) => {console.log('2',initialValue);
            return initialValue
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAgreement, resetAgreement, fetchedAgreement, fetchedAgreementError } = agreementSlice.actions

export default agreementSlice.reducer
 //export const selectAgreement = state => state.agreement;