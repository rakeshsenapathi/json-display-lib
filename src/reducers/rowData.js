import { GET_ROW_DATA, SORT_BY_COLUMN } from "../constants/actionTypes";

const initialState = {
    rowData: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_ROW_DATA:
            return {
                ...state,
                rowData: action.payload
            }

        case SORT_BY_COLUMN:
            console.log(action.payload);
            return {
                ...state,
                rowData: action.payload
            }

        default:
            return state;

    }

}