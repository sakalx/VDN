import {promise, building} from '../types';

const {
  FULFILLED,
  PENDING,
  REJECTED,
} = promise;

const {
  GET_BUILDING_DATA,
} = building;

const initState = {
  data: [],
  error: null,
  fetching: false,
};

export default function (state = initState, {type, payload}) {

  switch (type) {
    case GET_BUILDING_DATA + PENDING:
      return ({
        ...state,
        fetching: true,
      });

    case GET_BUILDING_DATA + FULFILLED:
      return ({
        ...state,
        error: null,
        fetching: false,
        data: payload,
      });

    case GET_BUILDING_DATA + REJECTED:
      return ({
        ...state,
        error: payload,
        fetching: false,
      });
  }

  return state;
}
