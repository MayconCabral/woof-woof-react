import { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

import { dogImages } from '../API';

function DogsPicture() {
    const { selectBreed } = useContext(Context);
    const [ dogsImg, setDogsImg ] = useState([]);
    const [ fetchOn, setFetchOn ] = useState(false);

    const URL = selectBreed.replace(' ', '/');

    useEffect(() => {
        if (URL && fetchOn) {
            dogImages(URL)
                     .then(images => setDogsImg(images))
        
            setFetchOn(false);
        };  
        setFetchOn(true)
   }, [URL, fetchOn])
   
    
    return (
        <ul>
        { dogsImg.slice(0, 12).map((img) => (
           <li> 
             <img src={img} key={img} alt={ `Exemple of ${URL} breeds`}></img>  
           </li> 
        ))}
        </ul>
    )
};

export default DogsPicture;
