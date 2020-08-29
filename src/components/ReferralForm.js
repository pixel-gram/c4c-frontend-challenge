import React, { useState } from 'react';
import { List, ListItem, Grid, TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, Cake, Translate, Phone, Email } from '@material-ui/icons'; 

const initialValues = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    address1: '', 
    language: '',
    email: '',
    phone: '',
    notes: '',    
}

const ReferralForm = ({referrals, setReferrals, color}) => {

    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = event => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    const addReferral = () => {
        let newReferrals = [...referrals];
        newReferrals.push(formValues);
        setReferrals(newReferrals);
        setFormValues(initialValues);
    }
    return(
        <>
        <div className='flex-column-start action-buttons' style={{backgroundColor: 'white', borderRadius: '5px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style={{ color: '#ffff', padding: 15, fontSize: 20}} className={`${color}`}>{referrals.length + 1}</p>
                <p style={{color: '#1a89b9', fontSize: 20, padding: 15}}>New Referral</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', padding: '10px 0px'}}>
                <List disablePadding style={{width: '90%'}}>
                    <ListItem disableGutters>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={6} sm={6}>
                                <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'First Name'
                                    required
                                    name='firstname'
                                    value={formValues.firstname}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={6} sm={6}>
                            <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'Last Name'
                                    required
                                    name='lastname'
                                    value={formValues.lastname}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disableGutters>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={6} sm={6}>
                                <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <Cake />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'Date of Birth'
                                    required
                                    type='date'
                                    name='dateOfBirth'
                                    value={formValues.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={6} sm={6}>
                            <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <Translate />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'Contact Language'
                                    required
                                    name='language'
                                    value={formValues.language}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disableGutters>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={6} sm={6}>
                                <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <Phone />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'Phone'
                                    required
                                    name='phone'
                                    value={formValues.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={6} sm={6}>
                            <TextField 
                                    fullWidth
                                    InputProps = {{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder = 'Email'
                                    required
                                    name='email'
                                    value={formValues.email}
                                    onChange={handleChange}                                    
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disableGutters>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={12} sm={12}>
                                <TextField 
                                        fullWidth
                                        placeholder = 'Address'
                                        required   
                                        name='address1'
                                        value={formValues.address1}
                                        onChange={handleChange}                                 
                                    />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disableGutters>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={12} sm={12}>
                                <TextField 
                                        fullWidth
                                        placeholder = 'Notes/Reason' 
                                        name='notes'
                                        value={formValues.notes}
                                        onChange={handleChange}              
                                    />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>        
            </div>
        </div>
        
        <p className={'text-blue add-more'} onClick={addReferral}> + ADD ANOTHER PATIENT </p>
        </>
    )
}

export default ReferralForm