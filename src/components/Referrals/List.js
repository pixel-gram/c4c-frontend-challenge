import React, {useContext} from 'react'

import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Container} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

import UpdateReferral from './Update'
import {ReferralContext} from "../../context/ReferralContext";



const ListReferrals =(props)=>{

    const {removeReferral} = useContext(ReferralContext)
    const NumberColors = ['#23a574','#2695a5','#39719b','#254b7a','#132b58']
    const { referral, index} = props

    return (
        <>

                <Container fixed style={{padding:'0px'}}>

                   <Accordion>
                       <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           style={{paddingLeft:'0px'}}
                       >
                           <Grid container   >

                               <Grid  item xs={1} className="accordian-header"  style={{backgroundColor: NumberColors[index]}}

                                      >
                                   <Typography variant="h4" gutterBottom >{index+1}</Typography>
                               </Grid>
                               <Grid container item xs={9}  justify="flex-start" style={{marginLeft:'15px', paddingTop:'20px'}} >
                                   <Typography variant="h5" gutterBottom >{(referral.data.first_name.toString())}</Typography>

                               </Grid>
                               <Grid container item xs={1} justify="flex-end" style={{paddingTop:'22px'}}>
                                   <DeleteIcon onClick={()=>removeReferral(referral.id) }/>

                               </Grid>
                           </Grid>
                       </AccordionSummary>
                       <AccordionDetails>
                          <UpdateReferral referral={referral}/>
                       </AccordionDetails>
                   </Accordion>

                </Container>


        </>
    )

}

export default ListReferrals