import getBuilding from 'root/api/getBuilding';
import {building} from '../types';

const {
  GET_BUILDING_DATA,
} = building;

export function getBuildingData() {
  return {
    type: GET_BUILDING_DATA,
    payload: getBuilding(),
  }
}