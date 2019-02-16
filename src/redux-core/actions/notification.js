import {notification} from '../types';

const {
  SET_NEW_NOTIFICATION,
  UPDATE_NOTIFICATION,
} = notification;

export function setNewNotification(payload) {
  return {
    type: SET_NEW_NOTIFICATION,
    payload,
  }
}

export function updateNotification(index, updatedData) {
  return {
    type: UPDATE_NOTIFICATION,
    payload: {index, updatedData},
  }
}