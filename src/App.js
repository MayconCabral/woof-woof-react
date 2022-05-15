import './App.css';
import DogsBreed from './components/DogsBreed';
import DogsPicture from './components/DogsPicture';
import Provider from './context/Provider';



function App() {
  return (
    <Provider>
      <main>
      <DogsBreed />
      <DogsPicture />
      </main>
    </Provider>  
  );
}

export default App;
