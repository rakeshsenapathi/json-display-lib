import { GET_COLUMN_HEADERS } from "../constants/actionTypes";

const initialState = {
    columnHeaders: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_COLUMN_HEADERS:
            return {
                ...state,
                columnHeaders: action.payload
            };

        default:
            return state;

    }

}