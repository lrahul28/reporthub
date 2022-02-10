import {put, call, takeLatest} from 'redux-saga/effects'
import types from '../actions/type'
import {checkVersionAPI} from '../../network/apis'

function* checkVersionRequest({payload, error}) {
  try {
    const resultObject = yield call(checkVersionAPI, payload)
    // update condition here based on backend response
    let resultRes = true
    if (resultObject?.status) {
      resultRes = true
    }
    if (resultRes) {
      yield put({
        type: types.SEND_REQUEST_CHECKVERSION_FAILURE,
        payload: resultObject,
      })
    } else {
      yield put({
        type: types.SEND_REQUEST_CHECKVERSION_SUCCESS,
        payload: resultObject,
      })
    }
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_CHECKVERSION_FAILURE,
      payload: error,
    })
  }
}

export default function* contactSaga() {
  yield takeLatest(types.SEND_REQUEST_CHECKVERSION, checkVersionRequest)
}
