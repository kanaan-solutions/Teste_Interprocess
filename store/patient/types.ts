// Action Types
export const PATIENT_LOAD = 'PATIENT_LOAD';
export const ADD_PATIENT = 'ADD_PATIENT';

export interface patientLoadAction {
  type: typeof PATIENT_LOAD;
}

interface addPatientAction {
  type: typeof ADD_PATIENT;
  payload: any[];
}

export type PatientAction =
  patientLoadAction |
  addPatientAction;

// Data Types
interface IPatient {
  name: string;
  birthDate: string;
  cpf: string;
  gender: string;
  adress: string;
  status: string;
}

// State Type
export interface PatientState {
  data: IPatient[];
  loading: boolean;
  error: boolean;
}