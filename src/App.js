import './App.css';
import DogsBreed from './components/DogsBreed';
import DogsPicture from './components/DogsPicture';
import PawPrints from './components/PawPrints';
import Provider from './context/Provider';



function App() {
  return (
    <Provider>
      <main>
      <DogsBreed />  
      <PawPrints />        
      <DogsPicture />             
      </main>
    </Provider>  
  );
}

export default App;
