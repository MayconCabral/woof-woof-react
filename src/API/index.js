import axios from "axios";

async function allBreeds() {    
    try {
        const {data} = await axios.get('https://dog.ceo/api/breeds/list/all');        
        return data.message;

    } catch (error) {
        console.log(error);
    }
}

async function dogImages(breed) {   
    try {
        const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);        
        return data.message;

    } catch (error) {
        console.log(error);
    }
}

export {
    allBreeds,
    dogImages,
};
