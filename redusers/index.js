import { combineReducers } from 'redux'

import aprooveReducer from './aprooveReduser';
import queueReducer from './queueReduser';
import myTasksReducer from './myTasksReduser';

const rootReducer = combineReducers({
  aprooveTasks: aprooveReducer,
   queueTasks: queueReducer,
   myTasksTasks: myTasksReducer
});

export default rootReducer;