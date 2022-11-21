import banner from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppionmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse lg:py-44">
                <img src={banner} className="max-w-sm lg:max-w-xl lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-1/2 '>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                     
                </div>
            </div>
        </div>
    );
};

export default AppionmentBanner;