import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import PatientReferralPanel from './Panel';
import { patientReferralsSlice } from './redux';

const noop = console.log

export default function PatientReferral(){
  const patientReferrals = useSelector(state=>state.patientReferrals.patients);
  const submitted = useSelector(state=>state.patientReferrals.submitted);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(1);
  useEffect(()=>{
    if(submitted){
      setTimeout(()=>{
        dispatch(patientReferralsSlice.actions.setSubmitted(0))
      }, 5000)
    }
  }, [submitted])
  const [submits, setSubmits] = useState([noop, noop, noop, noop, noop])
  const sendSubmitUp = useCallback((handleSubmit, i)=>{
    submits[i] = handleSubmit
    setSubmits(submits.slice(0, i).concat([handleSubmit]).concat(submits.slice(i+1)))
  }, [submits])
  return <>
    <Box component="header" bgcolor="#FFF" p={'56px 0 60px'}>
      <Typography variant="h1">Patient Referral Form</Typography>
      <Typography variant="h2">Hayes Valley Health San Francisco</Typography>
    </Box>
    <Box maxWidth={"782px"} onSubmit={(event)=>{      
      Promise.all(patientReferrals.map((_, i)=>{
        return new Promise((resolve, reject)=>{
          submits[i](resolve, reject)(event);
        })
      })).then(patients=>{
        fetch('/api/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(patients),
        }).then(()=>{
          dispatch(patientReferralsSlice.actions.setSubmitted(patients.length))
          dispatch(patientReferralsSlice.actions.resetPatients())
          setFormState(formState+1)
        })
      });
    }} m={"28px auto 35px"} p={'34px 0 50px'} position="relative" component="form" data-testid="submissionForm">
       {
        !submitted ? null : <Box data-testid="successMessage" id="success" color="#FFF" pt="10px" top="-28px" height="47px" left="-23px" width="828px" position="absolute" autoFocus bgcolor="#25A575" borderRadius="0 0 34.5px 34.5px" marginBottom="10px">
          <Typography variant="body2">{`Success! You have submitted ${submitted} pending referrals. You will be notified once they've been approved`}</Typography>
        </Box>
      }
      <Typography variant="h3">Referral Patients</Typography>
      <Typography variant="body1">You can add up to five patients at a time</Typography>
      <Box mt={'30px'}>
      {
        patientReferrals.map((p, i) => <PatientReferralPanel sendSubmitUp={sendSubmitUp} numberOfPatients={patientReferrals.length} key={`${formState}-${p.id}`} i={i} data={p}/>)
      }
      </Box>
      <Button startIcon={<Add />} color="primary" onClick={()=>dispatch(patientReferralsSlice.actions.add())}>add another patient</Button>
      <Button fullWidth variant="contained" type="submit" color="primary">Send Referrals</Button>
    </Box>
  </>
}