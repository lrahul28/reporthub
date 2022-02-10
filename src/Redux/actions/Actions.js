import types from './type';

export function checkVersion() {
  const payload = {};
  return {
    type: types.SEND_REQUEST_CHECKVERSION,
    payload
  };
}

export function resetStore() {
  return {
    type: types.RESET_AUTH_STORE
  };
}
