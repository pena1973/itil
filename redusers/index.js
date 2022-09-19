import { combineReducers } from 'redux'

import aprooveReducer from './aprooveReduser';
import queueReducer from './queueReduser';
import myListReducer from './myListReduser';
import historyReducer from './historyReduser';
import agreementReducer from './agreementReduser';

const rootReducer = combineReducers({
  aprooveTasks: aprooveReducer,
  queueTasks: queueReducer,
  myListReducer: myListReducer,
  historyReducer: historyReducer,
  agreementReducer: agreementReducer
});

export default rootReducer;

