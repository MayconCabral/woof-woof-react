import { useState } from 'react';
import propTypes from 'prop-types';

import WoofWoofContext from './WoofWoofContext';


function WoofWoofProvider({children}){
    const [selectBreed, setSelectBreed] = useState('');   

    const values = {
        selectBreed,
        setSelectBreed,
    };

    return (
        <WoofWoofContext.Provider value={values}>
            {children}
        </WoofWoofContext.Provider>
    )
}

WoofWoofProvider.propTypes = {
    children: propTypes.any,
  }.isRequired;

export default WoofWoofProvider;
