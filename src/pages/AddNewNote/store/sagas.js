import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_NOTES_VALUE } from "./actionsTypes";
import axios from "axios";
import { saveNotesValueFailed, saveNotesValueSuccessful } from "./actions";

//watcher saga
//put -> put value into your action and then this will dispatch the value to action -> reducer
//call -> calling any api
//takeevery, takelatest

const firebase = process.env.REACT_APP_FIREBASE;

export default function* AddNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga);
}

function* saveNotesSaga(action) {
  const headerParams = {
    "content-type": "application/json",
  };

  const createFinalNotesData = {
    id: Math.floor(Math.random() * 100000),
    name: action.noteValue,
  };

  try {
    const response = yield call(
      axios.post,
      `https://${firebase}.europe-west1.firebasedatabase.app/notesList.json`,
      createFinalNotesData,
      { headers: headerParams }
    );

    if (response.status === 200) {
      yield put(saveNotesValueSuccessful(true));
    }
  } catch (error) {
    yield put(saveNotesValueFailed(true));
  }
}
