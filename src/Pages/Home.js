import React from 'react';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
        </div>
    );
};

export default Home;