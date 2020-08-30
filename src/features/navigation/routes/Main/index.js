import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientReferral from '../../../patients/Referral';

export default function MainRoutes(){
  return <Switch>
    <Route exact path=""><PatientReferral /></Route>
  </Switch>
}