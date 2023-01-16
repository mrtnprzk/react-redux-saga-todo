import { combineReducers } from "redux";
import AddNotesReducer from "../pages/AddNewNote/store/reducers";
import NotesListReducer from "../pages/NotesList/store/reducers";

const rootReducer = combineReducers({
  AddNotesReducer,
  NotesListReducer,
});

export default rootReducer;
