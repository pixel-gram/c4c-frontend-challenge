import React from 'react';
import { commonStyles } from '../utils/commonStyles';
import ReferralForm from './ReferralForm';
const PageContent = () => {
    return(
        <div className='flex-column-center' style={commonStyles.paddingAround}>
            <p style={commonStyles.mediumFont} className={'text-blue'} >Referral Patients</p>
            <p style={commonStyles.smallFont} className={'text-blue'} >You can add up to five patients at a time</p>
                <ReferralForm />
            <p className={'text-blue add-more'}> + ADD ANOTHER PATIENT </p>
            <div className='action-buttons flex-column-center'>
                <button className='submit'>Send Referrals</button>
            </div>
        </div>
    );
}

export default PageContent;