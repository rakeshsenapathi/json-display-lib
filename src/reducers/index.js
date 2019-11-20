import { combineReducers } from 'redux';

import columnHeaders from './columnHeaders';

import rowData from './rowData';


export default combineReducers({
    columnHeaders,
    rowData
})