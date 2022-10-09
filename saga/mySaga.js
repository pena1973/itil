import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '...'
import {fetchAgreement,fetchedAgreement,fetchedAgreementError} from '../redusers/agreementReduser';
import {fetchMyList,fetchMyListError} from '../redusers/myListReduser';


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchedAgreementSaga(action) {
console.log(action);
   try {
      
      // Типа сформировали агримент 
      const agreement =
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
      yield put(fetchedAgreement(agreement)); // Put - по факту это наш диспач нашего агримента
   } catch (e) {
      yield put(fetchedAgreementError(e.message)); // а если ошибка передадим меседж
   }

}

function* fetchedMyList(action) {
   console.log(action);
         
      try {
        //const tasks = yield call(Api.fetchTasks, action.payload.tasks);
        //const tasks = yield call(Метод АПИ, Параметры метода); 
        // Типа сформировали список задач 
         const tasks = [];
         yield put(fetchMyList(tasks)); // Put - по факту это наш диспач нашего агримента
      } catch (e) {
         yield put(fetchMyListError(e.message)); // а если ошибка передадим меседж
      }
   }
   
// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* rootSaga() {
 yield takeEvery(fetchAgreement, fetchedAgreementSaga);    // Импорт данных агримента с сервера
// yield takeEvery(fetchMyList, fetchedMyList);    // Импорт моих задач с сервера
}

// ловим события в саге  - любое изменение активного списка или состояния моих задач
// регистрация нового пользователя
// при  начале работы приложения нужно сделать два экшена саги
// обновить список моих задач
// обновить агримент
// очередь будет динамически  через апи обновлятся как флет лист