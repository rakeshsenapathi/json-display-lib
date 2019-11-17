import { GET_ROW_DATA } from "../constants/actionTypes";

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

        default:
            return state;

    }

}