import React from 'react'
import { List, ListItem, Grid, TextField, InputAdornment } from '@material-ui/core'
import { AccountCircle, Cake, Translate, Phone, Email } from '@material-ui/icons'; 

const ReferralForm = () => {
    return(
        <div className='flex-column-start action-buttons' style={{backgroundColor: 'white', borderRadius: '5px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style={{backgroundColor: '#1ab982', color: '#ffff', padding: 10, fontSize: 20}}>1</p>
                <p style={{color: '#1a89b9', fontSize: 20, padding: 10}}>New Referral</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
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
                                    />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>        
            </div>
        </div>
    )
}

export default ReferralForm