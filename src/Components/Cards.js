import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'
import Card from './Card';

const Cards = () => {
    const cardInfo =[
        {
          icon:clock,
          heading:'Opening Hours' ,
          info:'9:00pm to 4:00pm  everyday',
          bgColor:"bg-gradient-to-r from-secondary to-primary"


        },
        {
          icon:marker,
          heading:'Our Location' ,
          info:'Road-4, House-15, Bananai, Dhaka ',
          bgColor:"bg-accent"


        },
        {
          icon:phone,
          heading:'Contacat Us Now' ,
          info:'+8801818487629',
          bgColor:"bg-gradient-to-r from-secondary to-primary"


        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardInfo.map((card,idx)=><Card key={idx} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;