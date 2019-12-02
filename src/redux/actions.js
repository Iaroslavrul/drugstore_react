import { getList, createListItem, removeListItem, updateListItem } from "../api";

export const medicinesGetListRequest = () => {
    return dispatch => {
        dispatch({ type: 'SET_LOADER' });
        getList()
            .then(response => dispatch({ type: 'MEDICINES_GET_LIST_REQUEST_SUCCESS', payload: response.data }))
            .catch(error => dispatch({ type: 'MEDICINES_GET_LIST_REQUEST_FAILURE', payload: error }))
    }
};

export const medicinesCreateListItemRequest = data => {
    return dispatch => {
        dispatch({ type: 'SET_LOADER' });
        createListItem(data)
            .then(response => dispatch({ type: 'MEDICINES_CREATE_LIST_ITEM_REQUEST_SUCCESS', payload: { status: response.status, data }}))
            .catch(error => dispatch({ type: 'MEDICINES_CREATE_LIST_ITEM_REQUEST_FAILURE', payload: error }))
    }
};

export const medicinesUpdateListItemRequest = data => {
    return dispatch => {
        dispatch({ type: 'SET_LOADER' });
        updateListItem(data)
            .then(response => dispatch({ type: 'MEDICINES_UPDATE_LIST_ITEM_REQUEST_SUCCESS', payload: { status: response.status, data } }))
            .catch(error => dispatch({ type: 'MEDICINES_UPDATE_LIST_ITEM_REQUEST_FAILURE', payload: error }))
    }
};

export const medicinesRemoveListItemRequest = data => {
    return dispatch => {
        dispatch({ type: 'SET_LOADER' });
        removeListItem(data)
            .then(response => dispatch({ type: 'MEDICINES_REMOVE_LIST_ITEM_REQUEST_SUCCESS', payload: { status: response.status, data } }))
            .catch(error => dispatch({ type: 'MEDICINES_REMOVE_LIST_ITEM_REQUEST_FAILURE', payload: error }))
    }
};
