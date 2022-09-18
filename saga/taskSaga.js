import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchTasks(action) {
   try {
      //const tasks = yield call(Api.fetchTasks, action.payload.tasks);
      // Типа сформировали список задач 
      const tasks = [];
      yield put({type: "tasks_FETCH_SUCCEEDED", tasks: tasks});
   } catch (e) {
      yield put({type: "tasks_FETCH_FAILED", message: e.message});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery("TASKS_FETCH_REQUESTED", fetchTasks);    // загрузить массив активных задач с сервера без файлов
  yield takeEvery("FILES_FETCH_REQUESTED", fetchFiles);    // загрузить массив файлов конкретной задачи
  yield takeEvery("HISTORY_FETCH_REQUESTED", fetchHistory);  // загрузить массив моих закрытых задач - историю
  yield takeEvery("PROFILE_FETCH_REQUESTED", fetchProfile);  // загрузить мой профиль
}