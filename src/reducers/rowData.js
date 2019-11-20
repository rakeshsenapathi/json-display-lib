import { GET_ROW_DATA, SORT_BY_COLUMN, SEARCH } from "../constants/actionTypes";

const initialState = {
    rowData: [],
    filteredRows: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_ROW_DATA:
            console.log("Called");
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

        case SEARCH:
            return {
                ...state,
                filteredRows: action.payload
            }

        default:
            return state;

    }

}