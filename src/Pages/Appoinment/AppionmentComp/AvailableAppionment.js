import { format } from 'date-fns';
import React from 'react';

const AvailableAppionment = ({selectedDate}) => {
    return (
        <div>
            <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate , 'PP')  }</p>
        </div>
    );
};

export default AvailableAppionment;