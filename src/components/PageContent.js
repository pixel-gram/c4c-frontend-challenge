import React from 'react';
import { commonStyles } from '../utils/commonStyles';
const PageContent = () => {
    return(
        <div className='flex-column-center' style={commonStyles.paddingAround}>
            <p style={commonStyles.mediumFont} className={'text-blue'} >Referral Patients</p>
            <p style={commonStyles.smallFont} className={'text-blue'} >You can add up to five patients at a time</p>
        </div>
    );
}

export default PageContent;