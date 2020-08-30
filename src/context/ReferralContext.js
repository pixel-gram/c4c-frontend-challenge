import React, {createContext, useState} from 'react'
import {nanoid} from "nanoid";
import axios from 'axios'

export const ReferralContext = createContext({})

export const ReferralProvider = ({children}) =>{

    const [referrals, setReferral] = useState([])

    const addReferral= (data)=>{
        setReferral([ ...referrals,{data, id:nanoid()}])
    }

    const removeReferral =(id)=>{
        setReferral(referrals.filter(referral => referral.id !== id))

    }

    const submitReferrals= async ()=>{

        if(referrals.length === 0){
            alert('Please add atleast one patient')
            return;
        }

        try{
            let response =  await axios.post('/api/referrals',referrals)

            alert('Thank you for your submission')

        }catch (e) {
            alert('Some error occured, please check console for details')
            console.log(e)
        }


    }


    const updateReferral = (id,data)=>{

        // ToDO Complete this

        const referral = referrals.find( r => r.id === id )
        const refIndex = referrals.findIndex( b => b.id === id)
        referral.data = data
        let nn =  referrals[refIndex].data = data
        setReferral(referrals)

    }

    return <ReferralContext.Provider value={{referrals, addReferral, removeReferral, updateReferral, submitReferrals}}>
        {children}
    </ReferralContext.Provider>
}