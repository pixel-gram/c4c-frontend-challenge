import React from 'react'

import { Grid, Typography, Box} from '@material-ui/core';


const Header =()=>{

    return (

        <>
            <Grid container style={{backgroundColor:'white'}} spacing={4} className="primary-heading">

                <Grid  item xs={12}  m={100}>
                    <Box m={5}>
                    <Typography variant="h4" gutterBottom className="primary-heading">
                        Patient Referral Form
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Hayes Valley Health San Francisco
                    </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={4}>

                <Grid item xs={12}  m={100}>
                    <Box m={5}>
                        <Typography variant="h6" gutterBottom>
                            Referral Patients
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                           You can add up to five patients at a time
                        </Typography>
                    </Box>
                </Grid>
            </Grid>


        </>
    )
}

export default Header