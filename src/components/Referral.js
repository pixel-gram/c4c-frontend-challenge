import React from 'react';
import { Delete, ExpandMore } from '@material-ui/icons';

const Referral = ({index, name, onDelete, color}) => {
    return(
        <div className='flex-column-start action-buttons' style={{backgroundColor: 'white', borderRadius: '5px'}}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <p style={{color: '#ffff', padding: 15, fontSize: 20}} className={`${color}`}>{index}</p>
                <p style={{color: '#1a89b9', fontSize: 20, padding: 15}}>{name}</p>
                <Delete style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={onDelete} />
                <ExpandMore style={{margin: '0px 10px', cursor: 'pointer'}} />
            </div>
        </div>
    )
}

export default Referral;