import {
  INIT_SAVE_NOTES_VALUE,
  SAVE_NOTES_VALUE_SUCCESSFUL,
  SAVE_NOTES_VALUE_FAILED,
} from "./actionsTypes";

export function initSaveNotesValue(noteValue) {
  return {
    type: INIT_SAVE_NOTES_VALUE,
    noteValue,
  };
}

export function saveNotesValueSuccessful(success) {
  return {
    type: SAVE_NOTES_VALUE_SUCCESSFUL,
    success,
  };
}

export function saveNotesValueFailed(failed) {
  return {
    type: SAVE_NOTES_VALUE_FAILED,
    failed,
  };
}
