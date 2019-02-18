import {notification} from '../types';

const {
  SET_NEW_NOTIFICATION,
  UPDATE_NOTIFICATION,
} = notification;

const initState = [];
const initNotification = {
  acceptedCallTime: '', //attended
  alarmType: '',
  building: '',
  doorStation: '',
  operator: '',
  resolvedCallTime: null,
  timestamp: null,
};

export default function(state = initState, {type, payload}) {

  switch (type) {
    case SET_NEW_NOTIFICATION:
      return ([
        ...state,
        payload,
      ]);

    case UPDATE_NOTIFICATION:
      const {index, updatedData} = payload;
      const newState = state.slice();
      const newData = {
        ...newState[index],
        ...updatedData,
      };
      newState[index] = newData;

      return newState;
  }

  return state;
}