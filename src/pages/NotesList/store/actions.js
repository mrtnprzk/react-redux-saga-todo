import {
  INIT_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA_FAILED,
  FETCHING_GET_LIST_DATA_SUCCESS,
} from "./actionsTypes";

export function initGetListData() {
  return {
    type: INIT_GET_LIST_DATA,
  };
}

export function initFetchingGetListData() {
  return {
    type: FETCHING_GET_LIST_DATA,
  };
}

export function initFetchingGetListDataSuccessful(notesListData) {
  return {
    type: FETCHING_GET_LIST_DATA_SUCCESS,
    notesListData
  };
}

export function initFetchingGetListDataFailed() {
  return {
    type: FETCHING_GET_LIST_DATA_FAILED,
  };
}
