import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../../Common/Loading';
import BookingModal from './BookingModal';
import OptionCard from './OptionCard';

const AvailableAppionment = ({ selectedDate }) => {
    // const [appionmentOption, setAppionmentOption] = useState([])
    const [treatment, setTreatent] = useState(null)
    const date =format(selectedDate, 'PP')

    // const { data:appionmentOption=[],} = useQuery({
    //     queryKey: ['appionmentOption'],
    //     queryFn: () => fetch('https://doctor-portal-server-sigma.vercel.app/appionmentOption')
    //         .then(res => res.json())

    // })

    const{data:appionmentOption=[],refetch, isLoading}=useQuery({
        queryKey:['appionmentOption',date],
        queryFn:async()=>{
           const res = await fetch(`https://doctor-portal-server-sigma.vercel.app/appionmentOption?date=${date}`)
           const data = await res.json()
           return data

        }
    })

    // useEffect(() => {
    //     fetch('https://doctor-portal-server-sigma.vercel.app/appionmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppionmentOption(data))

    // }, [])
    if(isLoading){
        return<Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppionment;  