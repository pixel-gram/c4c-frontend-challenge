import { combineReducers } from 'redux'
import { patientReferralsSlice } from '../features/patients/Referral/redux';
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  patientReferrals: patientReferralsSlice.reducer
})

export const generateStore = ()=>configureStore({reducer});
export const store = generateStore();