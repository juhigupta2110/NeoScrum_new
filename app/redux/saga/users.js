import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../../api/users';
import {apiService} from '../../libs/apiCall';

//WORKER SAGA
function* loginAsync(data) {
  try {
    yield call(apiService.signIn, data, 'post');
  } catch (e) {
    console.log(e);
  }
}

// WATCHER SAGA
export function* watchLoginAsync() {
  yield takeEvery('LOGIN_ASYNC', loginAsync(action.payload));
}
