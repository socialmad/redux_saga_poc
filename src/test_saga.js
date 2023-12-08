import {takeEvery, put} from 'redux-saga/effects';
import {QUOTE_API, FETCH_QUOTES} from './utils/constants';
import {setQuotes} from './actions/quote_action';

// Worker saga function to handle the asynchronous fetching of quotes data
function* getQuotesData() {
  const response = yield fetch(QUOTE_API);

  // Parsing the JSON data from the API response
  const responseData = yield response.json();

  // Dispatching the 'setQuotes' action with the retrieved quotes data
  yield put(setQuotes(responseData.quotes));
}

// Watcher saga function to listen for the FETCH_QUOTES action and trigger the worker saga
function* sagaData() {
  // Using 'takeEvery' to watch for every occurrence of the FETCH_QUOTES action and call 'getQuotesData
  yield takeEvery(FETCH_QUOTES, getQuotesData);
}

// Exporting the watcher saga to be run in the Redux Saga middleware
export default sagaData;
