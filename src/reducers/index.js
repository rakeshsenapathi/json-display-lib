import { combineReducers } from 'redux';

import columnHeaders from './columnHeaders';

import rowData from './rowData';

import test from './test';

export default combineReducers({
    columnHeaders,
    rowData,
    test
})