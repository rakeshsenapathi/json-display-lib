import api from '../api';

import * as types from '../constants/actionTypes';

export const get_column_headers = (columnHeaders) => ({

    type: types.GET_COLUMN_HEADERS,
    payload: columnHeaders

});

export const get_row_data = (rowData) => ({

    type: types.GET_ROW_DATA,
    payload: rowData

})


export const get_data = () => (dispatch) => {

    api.get_columnHeaders(
        (columnHeaders) => {
            dispatch(get_column_headers(columnHeaders));
        }
    );

    api.get_rowData(rowData => {
        dispatch(get_row_data(rowData));
    });

}