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

export default function (state = initState, {type, payload}) {

  switch (type) {
    case SET_NEW_NOTIFICATION:
      return ([
        payload,
        ...state,
      ]);

    case UPDATE_NOTIFICATION:
      const {index, updatedData} = payload;
      const newState = state.slice();
      const newData = {
        ...newState[index],
        ...updatedData,
      };
      newState[index] = newData;

      /* Trick sorting:
        first: all pending calls
        then: all accepted calls
        then: all resolved calls
    */
      const sortedNotifications = newState
        .sort((a, b) => {
          if (!a.acceptedCallTime) return -1;
          return a.resolvedCallTime - b.resolvedCallTime
        });

      return sortedNotifications;
  }

  return state;
}