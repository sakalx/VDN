import {promise, operators} from '../types';

const {
  FULFILLED,
  PENDING,
  REJECTED,
} = promise;

const {
  GET_OPERATORS_INFO,
} = operators;

const initState = {
  data: [],
  error: null,
  fetching: false,
};

export default function (state = initState, {type, payload}) {

  switch (type) {
    case GET_OPERATORS_INFO + PENDING:
      return ({
        ...state,
        fetching: true,
      });

    case GET_OPERATORS_INFO + FULFILLED:
      return ({
        ...state,
        error: null,
        fetching: false,
        data: payload,
      });

    case GET_OPERATORS_INFO + REJECTED:
      return ({
        ...state,
        error: payload,
        fetching: false,
      });
  }

  return state;
}
