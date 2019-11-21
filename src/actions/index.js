import api from '../api';

import * as types from '../constants/actionTypes';

export const get_column_headers = (columnHeaders) => ({

    type: types.GET_COLUMN_HEADERS,
    payload: columnHeaders

});

export const get_row_data = (rowData) => ({

    type: types.GET_ROW_DATA,
    payload: rowData

});

export const get_filtered_row = (rowData) => ({

    type: types.SEARCH,
    payload: rowData

});

export const get_data = () => (dispatch) => {

    api.get_columnHeaders(
        (columnHeaders) => {
            dispatch(get_column_headers(columnHeaders));
        }
    );
    api.get_rowData(rowData => {
        dispatch(get_row_data(rowData));
        dispatch(get_filtered_row(rowData));
    });

}

export const set_filter_rows = (payload) => ({
    type: types.SEARCH,
    payload: [...payload]
});


export const filter_rows = (payload) => (dispatch) => {
    dispatch(set_filter_rows(payload));
}

export const set_sort_by_column = (payload) => ({
    type: types.SORT_BY_COLUMN,
    payload: [...payload]
})

export const sort_by_column = (payload) => (dispatch) => {
    dispatch(set_sort_by_column(payload));
}



