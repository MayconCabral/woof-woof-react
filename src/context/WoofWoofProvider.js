import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import WoofWoofContext from './WoofWoofContext';
import allBreeds from "../API/allBreeds";

function WoofWoofProvider({children}){
    const [breedsObj, setBreedsObj] = useState({});
    const [selectBreed, setSelectBreed] = useState('');

    useEffect(() => {
        allBreeds().then((data) => {
            setBreedsObj(data); 
        })         
      }, [])

    const values = {
        breedsObj,
        setBreedsObj,
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
