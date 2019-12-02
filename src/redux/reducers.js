const initialState = {
    loading: false,
    statusModal: null,
    data: null,
    step: 1,
    visible: false,
    temporary: null,
    error: null
};

export const medicinesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADER':
            return { ...state, loading: true };

        case 'MEDICINES_GET_LIST_REQUEST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case 'MEDICINES_UPDATE_LIST_ITEM_REQUEST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.status === 200 ?
                    state.data.map(user => {
                        if(user.id === action.payload.data.id) {
                            user = action.payload.data;
                        }
                        return user;
                    }) : state.data
            };

        case 'MEDICINES_CREATE_LIST_ITEM_REQUEST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.status === 201 ? [...state.data, action.payload.data] : state.data
            };

        case 'MEDICINES_REMOVE_LIST_ITEM_REQUEST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.status === 200 ?
                    state.data.filter(user => user.id !== action.payload.data.id) :
                    state.data
            };

        case 'DEFINE_UPDATE_DATA':
            return {
                ...state,
                temporary: action.payload.data,
                visible: action.payload.visible,
                statusModal: 'EDIT'
            };

        case 'CHANGE_VIEW':
            return {
              ...state,
                step: action.payload
            };

        case 'HIDE_MODAL':
            return {
                ...state,
                visible: action.payload.visible
            };

        case 'MEDICINES_GET_LIST_REQUEST_FAILURE':
        case 'MEDICINES_REMOVE_LIST_ITEM_REQUEST_FAILURE':
        case 'MEDICINES_CREATE_LIST_ITEM_REQUEST_FAILURE':
        case 'MEDICINES_UPDATE_LIST_ITEM_REQUEST_FAILURE':
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};
