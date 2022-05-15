import { useState } from 'react';
import propTypes from 'prop-types';

import Context from './Context';


function Provider({children}){
    const [selectBreed, setSelectBreed] = useState('');   

    const values = {
        selectBreed,
        setSelectBreed,
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: propTypes.any,
  }.isRequired;

export default Provider;
