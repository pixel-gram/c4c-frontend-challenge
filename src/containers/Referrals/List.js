import React, {useContext}  from 'react'

import {Box} from '@material-ui/core';
import ShowAccordian from '../../components/Referrals/List'

import {ReferralContext} from "../../context/ReferralContext";


const ListReferrals =()=>{

    const {referrals} = useContext(ReferralContext)

    return (
        <>

            {referrals.map((referral,index) => {

                return (
                    <Box key={index}>
                        <ShowAccordian key={referral.id} index={index} referral={referral}/>
                        <br/>
                    </Box>
                )
            })}

        </>
    )
}

export default ListReferrals