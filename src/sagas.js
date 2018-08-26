import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest('API_USERS_REQUEST', workerSaga);
}

function fetchUsers(action) {
  console.log(action)
  return axios({
    method: 'get',
    url: 'http://localhost:4000/users',
    params: {
      _limit:  5,
      _page: action.page,
      _sort: action.sortBy,
      _order: action.order
    }
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchUsers, action);
    const { page, sortBy, order } = action;
    const payload = {
      users: response.data,
      totalPages: response.headers['x-total-count'] / 5,
      page,
      sortBy, 
      order
    };
    yield put({ type: 'API_USERS_SUCCESS', payload });
  
  } catch (error) {
    yield put({ type: 'API_USERS_FAILURE', error });
  }
}