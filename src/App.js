import './App.css';
import DogsBreed from './components/DogsBreed';
import DogsPicture from './components/DogsPicture';
import WoofWoofProvider from './context/WoofWoofProvider';



function App() {
  return (
    <WoofWoofProvider>
      <main>
      <DogsBreed />
      <DogsPicture />
      </main>
    </WoofWoofProvider>  
  );
}

export default App;
