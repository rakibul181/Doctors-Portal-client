import React, { useState } from 'react';
import AppionmentBanner from './AppionmentComp/AppionmentBanner';
import AvailableAppionment from './AppionmentComp/AvailableAppionment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppionmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppionmentBanner>
            <AvailableAppionment
                selectedDate={selectedDate}
            ></AvailableAppionment>
        </div>
    );
};

export default Appoinment;