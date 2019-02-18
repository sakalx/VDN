import {promise} from '../types';

const {
  FULFILLED,
  PENDING,
  REJECTED,
} = promise;

const initState = {

};

export default function(state = initState, {type, payload}) {

  switch (type) {

    case SET_CURRENT_STATION + FULFILLED:
      return ({
        ...state,
        errorStation: null,
        fetchingStation: false,
        station: {
          ...state.station,
          ...payload,
        },
      });

    case SET_CURRENT_STATION + PENDING:
      return ({
        ...state,
        fetchingStation: true,
      });

    case SET_CURRENT_STATION + REJECTED:
      return ({
        ...state,
        errorStation: true,
        fetchingStation: false,
      });

    case SET_LIST_OF_STATIONS:
      return ({
        ...state,
        list: payload,
      });

    case SET_STATIONS_BY_COUNTRY + FULFILLED:
      return ({
        ...state,
        errorList: null,
        fetchingList: false,
      });

    case SET_STATIONS_BY_COUNTRY + PENDING:
      return ({
        ...state,
        fetchingList: true,
      });

    case SET_STATIONS_BY_COUNTRY + REJECTED:
      return ({
        ...state,
        errorList: payload,
        fetchingList: false,
      });
  }

  return state;
}
