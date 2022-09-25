
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

//////////////////////////////////////////////////////////
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './index'
import { legacy_createStore as createStore} from 'redux'












