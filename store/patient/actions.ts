import { ADD_PATIENT, PATIENT_LOAD } from './types';

export const patientLoad = () => ({
  type: PATIENT_LOAD,
});

export const addPatient = (data: any[]) => ({
  type: ADD_PATIENT,
  payload: data,
});
