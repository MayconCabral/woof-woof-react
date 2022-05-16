async function allBreeds() {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const breeds = await data.json();
    
    return breeds.message;
}

async function dogImages(breed) {
    const data = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const imgs = await data.json();

    return imgs.message;
}

export {
    allBreeds,
    dogImages,
};
