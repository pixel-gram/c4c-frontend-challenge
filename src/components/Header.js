import React from 'react';
import { commonStyles } from '../utils/commonStyles';
const Header = () => {
    return(
        <div className='flex-column-center header-title'>
            <p style={commonStyles.bigFont} className={'text-blue'}>Patient Referral Form</p>
            <p style={commonStyles.mediumFont} className={'text-blue'}>Hayes Valley Health San Francisco</p>
        </div>
    )
}

export default Header;