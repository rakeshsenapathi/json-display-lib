// Mocking the client-server communication by setting a timeout.
import _data from './data';

const TIMEOUT = 0;

export default {
    get_columnHeaders: (columnHeaders, timeout) => setTimeout(
        () => columnHeaders(_data.columnHeaders),
        timeout || TIMEOUT),

    get_rowData: (rowData, timeout) => setTimeout(
        () => rowData(_data.rowData),
        timeout || TIMEOUT)
}

