import React, { useState } from 'react';
import { commonStyles } from '../utils/commonStyles';
import ReferralForm from './ReferralForm';
import Referral from './Referral';

const colorsName = ['blue-green', 'blue-cyan', 'blue-light', 'green-dark', 'blue-blue']

const PageContent = () => {
    const [referrals, setReferrals] = useState([]);

    const onDelete = (index) => {
        let newReferrals = [...referrals];
        newReferrals.splice(index, 1);
        setReferrals(newReferrals);
    }

    async function submitReferrals(){
       await fetch('/api/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({referrals: referrals})
            }).then(response => {
                setReferrals([]);
                return response;
            }).catch(err => {
                return null;
            })
    }

    return(
        <div className='flex-column-center' style={commonStyles.paddingAround}>
            <p style={commonStyles.mediumFont} className={'text-blue'} >Referral Patients</p>
            <p style={commonStyles.smallFont} className={'text-blue'} >You can add up to five patients at a time</p>
            {
                referrals.map((referral, index) => (
                    <Referral key={index} index={index+1} name={`${referral.firstname} ${referral.lastname}`} onDelete={() => onDelete(index)} color={colorsName[index]} />
                ))
            }
            {
                referrals.length < 5 &&
                <ReferralForm referrals={referrals} setReferrals={setReferrals} color={colorsName[referrals.length]}/>
            }
            <div className='action-buttons flex-column-center'>
                <button className='submit' onClick={submitReferrals}>Send Referrals</button>
            </div>
        </div>
    );
}

export default PageContent;