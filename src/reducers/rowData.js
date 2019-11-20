import { GET_ROW_DATA, SORT_BY_COLUMN, TEST } from "../constants/actionTypes";

const initialState = {
    rowData: [],
    test: 2
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

        case TEST:
            return {
                ...state,
                test: action.payload
            }

        default:
            return state;

    }

}