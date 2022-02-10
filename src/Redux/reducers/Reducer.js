import types from '../actions/type';

const initialState = {
  loading: false,
  status: null,
  data: null,
  message: null,
  action: null
};

// add three case to mange 1.loading , 2.success , 3. fail  

const authReducer = (type, payload, state = initialState,) => {

  switch (payload.type) {
    case types.SEND_REQUEST_CHECKVERSION:
      return {
        ...state,
        loading: true,
        action: types.SEND_REQUEST_CHECKVERSION
      };
    case types.SEND_REQUEST_CHECKVERSION_SUCCESS:
      return {
        ...state,
        status: payload.status ? payload.status : null,
        data: payload,
        message: payload.message ? payload.message : null,
        loading: false,
        action: types.SEND_REQUEST_CHECKVERSION_SUCCESS
      };
    case types.SEND_REQUEST_CHECKVERSION_FAILURE:
      return {
        ...state,
        status: payload.status ? payload.status : null,
        data: payload.data ? payload.data : null,
        message: payload.message ? payload.message : null,
        loading: false,
        action: types.SEND_REQUEST_CHECKVERSION_FAILURE
      };
    case types.RESET_AUTH_STORE:
      return {
        ...state,
        status: null,
        data: null,
        message: null,
        loading: false,
        action: null,
      };
    default:
      return state;
  }
}

export default authReducer
