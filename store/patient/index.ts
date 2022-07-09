import { Reducer, Action } from 'redux';
import {
  ADD_PATIENT, PATIENT_LOAD, PatientAction, PatientState
} from './types';

const INITIAL_STATE: PatientState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PatientState, Action> = (
  state = INITIAL_STATE,
  action: PatientAction
) => {
  switch (action.type) {
    case PATIENT_LOAD:
      return {
        ...state,
        loading: true,
      };
    case ADD_PATIENT:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;