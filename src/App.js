import React,{useContext} from 'react';

import {Container, Grid, Button, Typography} from '@material-ui/core'

import ListReferrals from './containers/Referrals/List'
import NewReferrals from './containers/Referrals/New'
import Header from './containers/Referrals/Header'
import {ReferralContext} from "./context/ReferralContext";

import './styles/global.css'
import './App.css';


function App() {

    const {referrals, submitReferrals} = useContext(ReferralContext)


    const NewReferralHandler=()=>{

        if(referrals.length<5 ){
            return(
                <>
                    <Container>
                        <Grid container justify="center">
                            <Grid item xs={8}>

                                <NewReferrals/>
                            </Grid>
                        </Grid>
                    </Container>
                    <br/>
                    <br/>

                    <Container>
                        <Grid container justify="center">
                            <Grid item xs={8}>

                                <Button type="submit" form="hook-form"  color="primary">
                                    <Typography  variant="h6" gutterBottom>
                                        +   Add Another Patient
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )
        }else{
            return (<></>)
        }
    }



  return (
    <div className="App">

        <Header/>


        <br/>
        <Container>
            <Grid container justify="center">
                <Grid item xs={8}>

                    <ListReferrals/>

                </Grid>
            </Grid>
        </Container>


        <>
            <NewReferralHandler/>
        </>


        <Container>
            <Grid container justify="center">
                <Grid item xs={8}>

                    <Button onClick={()=> submitReferrals()}  variant="contained"  style={{borderRadius:'20px',backgroundColor:'#0B2B5B',color:'white'}} fullWidth>
                        <Typography   gutterBottom>
                            Send Referrals
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Container>

    </div>
  );
}

export default App;
