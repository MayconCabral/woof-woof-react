import React from 'react';
import Context from '../context/Context';

import paw from '../images/paw.png';


const PawPrints = () => {
    return (
       <div className='containerPaw'>
         <img className='paw_1' src={paw} alt='paw'/>
         <img className='paw_2' src={paw} alt='paw'/>
         <img className='paw_3'src={paw} alt='paw'/>
         <img className='paw_4'src={paw} alt='paw'/>
         <img className='paw_5'src={paw} alt='paw'/>
         <img className='paw_6'src={paw} alt='paw'/>
       </div>      
    )
}

export default PawPrints;