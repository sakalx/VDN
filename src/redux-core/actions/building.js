import getBuilding from 'root/api/getBuilding';
import {building} from '../types';

const {
  GET_BUILDING_DATA,
  SET_SELECTED_BUILDING,
} = building;

export function getBuildingData() {
  return {
    type: GET_BUILDING_DATA,
    payload: getBuilding(),
  }
}
export function selectedBuilding(name) {
  return {
    type: SET_SELECTED_BUILDING,
    payload: name,
  }
}