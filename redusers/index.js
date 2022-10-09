import { combineReducers } from 'redux'

// всего два редусора   договор и мои задачи
// очередь только с сервера причем она должга обновлятся

import myListReducer from './myListReduser';
import agreementReducer from './agreementReduser';

const rootReducer = combineReducers({
  myListReducer: myListReducer,
  agreementReducer: agreementReducer
});

export default rootReducer;

// нужно еще хранить состояние залогинился или нет