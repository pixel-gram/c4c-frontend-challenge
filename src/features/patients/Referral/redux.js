import { createSlice } from '@reduxjs/toolkit';

let id = 1;

const defaultReferral = {
  firstName: '',
  lastName: '',
  dob: '',
  phone: '',
  language: '',
  email: '',
  address: '',
  notes: '',
  id,
};

export const patientReferralsSlice = createSlice({
  name: 'patientReferrals',
  initialState: {
    submitted: 0,
    patients: [
      {
        ...defaultReferral
      }
    ]
  },
  reducers: {
    add: state=>{
      state.patients = state.patients.concat([{
        ...defaultReferral,
        id: (++id)
      }]);
      return state;
    },
    remove: (state, {payload})=>{
      state.patients = state.patients.filter((_, i)=>(i !== payload));
      return state;
    },
    update: (state, {payload})=>{
      Object.keys(payload.properties).forEach(key => {
        state.patients[payload.index][key] = payload.properties[key]
      })
      return state
    },
    resetPatients: (state)=>{
      state.patients = [{...defaultReferral}];
      return state;
    },
    setSubmitted: (state, {payload})=>{
      state.submitted = payload;
      return state;
    }
  }
});