import { all, fork } from "redux-saga/effects";
import AddNotesSaga from "../pages/AddNewNote/store/sagas";
import NotesListSaga from "../pages/NotesList/store/sagas";

export default function* rootSaga() {
  yield all([fork(AddNotesSaga), fork(NotesListSaga)]);
}
