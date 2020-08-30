import React, { useEffect } from 'react';
import { Box, Typography, TextField, Grid, InputAdornment, makeStyles, IconButton } from '@material-ui/core';
import { AccountCircle, Translate, Phone, Email, Delete, ExpandLess, ExpandMore } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';
import languages from '../../../../languages';
import LocationAutoComplete from '../../../common/GoogleMaps';
import { patientReferralsSlice } from '../redux';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    marginLeft: '16px',
  },
  number: {
    fontSize: "26px",
    lineHeight: "32px",
    height: "64px",
    width: "40px",
  }
})

const patientReferralColors = [
  "#25A575",
  "#2595A5",
  "#3A719B",
  "#254B7A",
  "#142B58",
]

export default function PatientReferralPanel({data, i, numberOfPatients, sendSubmitUp}){
  const classes = useStyles();
  const [ expanded, setExpanded ] = React.useState(true)
  const dispatch = useDispatch();
  const toggleExpanded = ()=>setExpanded(!expanded);
  const { handleSubmit, register, errors } = useForm();
  useEffect(()=>{
    sendSubmitUp(handleSubmit, i)
  }, [i, handleSubmit])
  const moreThanOnePatient = numberOfPatients > 1;
  const inputProps = [
    {
      compProps: {
        id: 'firstName'+i,
        name: 'firstName',
        label: 'First Name',
        fullWidth: true,
        required: true,
        inputRef: register({required: true}),
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }
      },
      Comp: TextField,
      size: 6,
    },
    {
      compProps: {
        id: 'lastName'+i,
        name: 'lastName',
        label: 'Last Name',
        fullWidth: true,
        required: true,
        inputRef: register({required: true}),
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }
      },
      Comp: TextField,
      size: 6,
    },
    {
      compProps: {
        id: 'dob'+i,
        name: 'dob',
        label: 'Date of Birth',
        fullWidth: true,
        required: true,
        placeholder: '31/01/2020',
        inputRef: register({
          required: true,
          pattern: /^[0-3]\d\/[01]\d\/\d\d\d\d$/
        }),
        helperText: errors.dob ? 'Date must be in format DD/MM/YYYY' : undefined
      },
      Comp: TextField,
      size: 6,
    },
    {
      compProps: {
        options: languages,
        name: 'language',
        onChange: (event, language)=>dispatch(patientReferralsSlice.actions.update({properties: {language}, index: i})),
        renderInput: (params)=><TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Translate />
              </InputAdornment>
            ),
          }}
          {
            ...{
              ...params,
              name: 'language',
              label: 'Contact Language',
              fullWidth: true,
              required: true,
              inputRef: register({required: true}),
              error: errors.language,
              helperText: errors.language?.message || errors.language?.type
            }
          }
        />
      },
      Comp: Autocomplete,
      size: 6,
    },
    {
      compProps: {
        id: 'phone'+i,
        name: 'phone',
        label: 'Phone',
        fullWidth: true,
        required: true,
        inputRef: register({required: true}),
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }
        
      },
      Comp: TextField,
      size: 6,
    },
    {
      compProps: {
        id: 'email'+i,
        name: 'email',
        label: 'Email',
        fullWidth: true,
        required: true,
        inputRef: register({required: true}),
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }
      },
      Comp: TextField,
      size: 6,
    },
    process.env.REACT_APP_GOOGLE_API_KEY ? {
      compProps: {
        inputProps: {
          id: 'address'+i,  
          name: 'address',
          label: 'Address',
          fullWidth: true,
          required: true,
          inputRef: register({required: true}),
        }
      },
      Comp: LocationAutoComplete,
      size: 12,
    } : {
      compProps: {
        id: 'address'+i,
        name: 'address',
        label: 'Address',
        required: true,
        fullWidth: true,
        inputRef: register({required: true}),
      },
      Comp: TextField,
      size: 12,
    },
    {
      compProps: {
        id: 'notes'+i,
        name: 'notes',
        label: 'Notes/Reason',
        fullWidth: true,
        inputRef: register,
      },
      Comp: TextField,
      size: 12,
    },
  ];
  return <Box borderRadius="5px" m="2px 0" bgcolor="#FFF" component="div" overflow="hidden">
    {  
    <Grid container alignItems="center">
        <Grid item>
          <Grid 
            className={classes.number}
            style={{
              backgroundColor: patientReferralColors[i]
            }}
            container
            alignItems="center"
            justify="center"
          >
            <Grid item component="span">
              {i+1}
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.title} item>
          <Typography align="left" variant="h4">New Referral</Typography>  
        </Grid>
        {
          moreThanOnePatient && <Grid item>
            <IconButton size="small" onClick={()=>dispatch(patientReferralsSlice.actions.remove(i))}>
              <Delete />
            </IconButton>
            <IconButton disabled={!!Object.keys(errors).length} size="small" onClick={toggleExpanded}>
              {
                expanded ? <ExpandLess /> : <ExpandMore />
              }
            </IconButton>
          </Grid>
        }
      </Grid>
    }
    <Inputs hidden={moreThanOnePatient && !expanded && !Object.keys(errors).length } inputProps={inputProps} errors={errors} index={i}/>
  </Box>
}

function Inputs({inputProps, hidden, errors, index}){
  const dispatch = useDispatch();
  return <Box display={hidden ? 'none' : 'block'} m="32px 0" p={"0 40px"}>
    <Grid spacing={2} container>
    {
      inputProps.map(({Comp, compProps, size}, i)=><Grid item key={i} sm={size} xs={12}>
        <Comp {...{error: errors[compProps.name], helperText: errors[compProps.name]?.message || errors[compProps.name]?.type, onChange: (event)=>dispatch(patientReferralsSlice.actions.update({properties: {[compProps.name]: event.target.value}, index})),...compProps}} />
      </Grid>)
    }
    </Grid>
  </Box>
}
