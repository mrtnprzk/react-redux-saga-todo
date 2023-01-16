import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_GET_LIST_DATA } from "./actionsTypes";
import axios from "axios";
import {
  initFetchingGetListData,
  initFetchingGetListDataFailed,
  initFetchingGetListDataSuccessful,
} from "./actions";

//watcher saga
//put -> put value into your action and then this will dispatch the value to action -> reducer
//call -> calling any api
//takeevery, takelatest

const firebase = process.env.REACT_APP_FIREBASE;

export default function* NotesListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  yield put(initFetchingGetListData());

  try {
    const response = yield call(
      axios.get,
      `https://${firebase}.europe-west1.firebasedatabase.app/notesList.json`
    );

    if (response && response.status === 200) {
      const { data } = response;
      const createData = [];

      for (const key in data) {
        createData.push(data[key]);
      }

      yield put(initFetchingGetListDataSuccessful(createData));
    }
  } catch (error) {
    yield put(initFetchingGetListDataFailed());
  }
}
