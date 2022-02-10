import { all } from 'redux-saga/effects';

// Sagas
import Saga from './Saga';


// Export the root saga
export default function* rootSaga() {
  // yield spawn(appSettingsSaga,authSaga);
  yield all([
    Saga(),
  ])
}
