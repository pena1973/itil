import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootSaga} from '../saga/mySaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const sagaMiddleware = createSagaMiddleware();

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

console.log('sagaMiddleware',sagaMiddleware);

//////////////////////////////////////////////////////////
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './index';
import { legacy_createStore as createStore} from 'redux';

sagaMiddleware.run(rootSaga);










