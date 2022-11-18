import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import OptionCard from './OptionCard';

const AvailableAppionment = ({ selectedDate }) => {
    const [appionmentOption, setAppionmentOption] = useState([])
    const[treatment, setTreatent] = useState(null)


    useEffect(() => {
        fetch('appionmentOption.json')
            .then(res => res.json())
            .then(data => setAppionmentOption(data))

    }, [])
    console.log(appionmentOption);
    return (
        <div className='mb-16'>
            <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appionmentOption.map(options => <OptionCard
                        key={options._id}
                        options={options}
                        setTreatent={setTreatent}
                        
                        ></OptionCard>)
                }
            </div>
            {
                
                    treatment &&
                   <BookingModal 
                   treatment={treatment}
                   selectedDate={selectedDate}
                   setTreatent={setTreatent}
                   ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppionment;