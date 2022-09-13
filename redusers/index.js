import { combineReducers } from 'redux'

import aprooveReducer from './aprooveReduser';
import queueReducer from './queueReduser';

const rootReducer = combineReducers({
  aprooveTasks: aprooveReducer,
   queueTasks: queueReducer
});

export default rootReducer;